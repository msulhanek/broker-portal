import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SearchRequest} from "../interfaces/search-request.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getAllCounties(): Observable<SearchRequest>{
    const data = {
      group: "5f86b22df9ac3b272d6b4191",
      query: "(visualId:*KRA*)"
    }
    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0', data);
  }

  getTask(id: string): Observable<SearchRequest> {
    const data = {id: id}
    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/task/search?sort=priority,desc&size=50&page=0', {case: data});
  }

  getData(value: string): Observable<SearchRequest>{
   return this.httpClient.get<SearchRequest>('https://engine.interes.group/api/task/' + value + '/data');
  }


  getTypes(): Observable<SearchRequest>{
    const data = {
      group: "5f86b22df9ac3b272d6b4191",
      query: "(visualId:*TYP*)"
    }
    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0', data);
  }

  getCategories(): Observable<SearchRequest>{
    const data = {
      group: "5f86b22df9ac3b272d6b4191",
      query: "(title:*BYTY*) OR (title:*DOMY*)"
    }
    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=25&page=0&operation=OR', data);

  }

  search(queryFilter: string): Observable<SearchRequest> {

    const data = {
      group: "5f86b22df9ac3b272d6b4191",
      query: queryFilter
    }

    return this.httpClient.post<SearchRequest>('https://engine.interes.group/api/workflow/case/search?sort=stringId,desc&size=100&page=0', data);
  }
}
