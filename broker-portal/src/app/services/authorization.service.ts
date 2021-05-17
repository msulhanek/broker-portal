import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpClient: HttpClient) {
  }


  login(): Observable<void> {
    const headers = new HttpHeaders()
      .set("Authorization", "Basic eHN1bGhhbmVrbUBzdHViYS5zazo5MjM3MQ==");
    localStorage.clear();

    return this.httpClient.get<any>('https://engine.interes.group/api/auth/login', {headers, observe: 'response'})
      .pipe(map((resp: HttpResponse<any>) => {
        localStorage.setItem('X-Auth-Token', resp.headers.get('X-Auth-Token'));
    }))
  }
}
