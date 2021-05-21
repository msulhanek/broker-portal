import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SearchRequest} from "../interfaces/search-request.model";
import {TaskData} from "../interfaces/task-data.model";
import {MapFields} from "../interfaces/map-fields.model";
import {DataGroups} from "../interfaces/data-groups.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(queryFilter: string): Observable<SearchRequest> {

    const group = {group: '5f86b22df9ac3b272d6b4191'};
    const query = {query: queryFilter};
    const array = [group, query];

    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/workflow/case/search?sort=creationDateSortable,desc&size=50&page=0&operation=AND', array);
  }

  get(): Observable<any> {
    return this.httpClient.get<any>('https://engine.interes.group/api/task/6005f705f9ac3b6feca9df03/data');
  }

  getSuggested(queryFilter: string): Observable<SearchRequest> {

    const group = {group: '5f86b22df9ac3b272d6b4191'};
    const query = {query: queryFilter};
    const array = [group, query];

    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/workflow/case/search?sort=creationDateSortable,desc&size=5&page=0&operation=AND', array);
  }

  getTask(id: string): Observable<SearchRequest> {
    const test = {id: id};

    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/task/search?sort=priority,desc&size=50&page=0', {case: test});
  }

  getData(id: string): Observable<SearchRequest> {
    return this.httpClient.get<SearchRequest>(`https://engine.interes.group/api/task/${id}/data`);
  }

  getImage(extension: string): Observable<any> {
    return this.httpClient.get(`https://engine.interes.group/api/task/${extension}/file/file_0`, {responseType: 'blob'});
  }

  getImageList(stringId: string, fileName: string): Observable<any> {
    return this.httpClient.get(`https://engine.interes.group/api/task/${stringId}/file/fileList_0/${fileName}`, {responseType: 'blob'});
  }

  parseData(data): TaskData {
    const result: TaskData = {
      localisedEnumerationMapFields: [],
      localisedNumberFields: [],
      localisedTextFields: [],
      localisedFields: []
    };

    const dataGroups: DataGroups[] = data._embedded.dataGroups as DataGroups[];

    dataGroups.forEach(dataGroup => {
      if (dataGroup.fields._embedded.localisedTextFields) {
        result.localisedTextFields.push(...dataGroup.fields._embedded.localisedTextFields);
      }
      if (dataGroup.fields._embedded.localisedNumberFields) {
        result.localisedNumberFields.push(...dataGroup.fields._embedded.localisedNumberFields);
      }
      if (dataGroup.fields._embedded.localisedFields) {
        result.localisedFields.push(...dataGroup.fields._embedded.localisedFields);
      }
      if (dataGroup.fields._embedded.localisedEnumerationMapFields) {
        dataGroup.fields._embedded.localisedEnumerationMapFields.forEach(t => {
          const test: MapFields = {
            value: PropertyService.parseMap(t, t.value),
            name: t.name,
            stringId: t.stringId
          }
          result.localisedEnumerationMapFields.push(test);
        });
      }
    })
    return result;
  }

  private static parseMap(data: MapFields, value: string): string {
    return data.options[value]
  }
}
