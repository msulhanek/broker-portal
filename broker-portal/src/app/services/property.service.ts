import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Property} from "../interfaces/property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Property>{
    return this.httpClient.get<Property>('');
  }

  get(): Observable<any> {
    return this.httpClient.get<any>('https://engine.interes.group/api/task/6005f705f9ac3b6feca9df03/data');
  }
}
