import { Injectable } from '@angular/core';
import {AuthorizationService} from "./authorization.service";

export function initializeApp(appInitService: AppInitService)  {
  return (): Promise<void> => appInitService.init();
}

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private authorizationService: AuthorizationService) {
  }

  init(): Promise<void> {
    const login = this.authorizationService.login().toPromise();
    return Promise.all([login]).then(() => {});
  }
}
