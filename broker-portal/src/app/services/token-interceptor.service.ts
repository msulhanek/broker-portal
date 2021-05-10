import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizeRequest = req.clone({
      setHeaders: {
        "X-Auth-Token": localStorage.getItem('X-Auth-Token')
      }
    });
    return next.handle(tokenizeRequest);
  }
}
