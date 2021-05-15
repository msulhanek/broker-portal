import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Property} from "../interfaces/property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private httpOptions;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Property>{
    return this.httpClient.get('https://engine.interes.group/api/task/6088204df9ac3b6fec93e6ba/data')
  }
}
