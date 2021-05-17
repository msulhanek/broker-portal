import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Property} from "../interfaces/property";
import {SearchRequest} from "../interfaces/search-request.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Property> {
    return this.httpClient.get('https://engine.interes.group/api/task/6088204df9ac3b6fec93e6ba/data')
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

  getTask(id: string): Observable<any> {
    const test = {id: id};

    return this.httpClient.post('https://engine.interes.group/api/task/search?sort=priority,desc&size=50&page=0', {case: test});
  }

  test(): Observable<any> {
    let group = {group: '5f86b23cf9ac3b272d6c4e4d'};

    return this.httpClient.post(' https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0', group);
  }
}
