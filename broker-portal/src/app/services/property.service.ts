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
}
