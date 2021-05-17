import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {SlickCarouselModule} from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertySliderComponent } from './property-slider/property-slider.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppInitService, initializeApp} from "./services/app-init.service";
import {TokenInterceptorService} from "./services/token-interceptor.service";
import {ReactiveFormsModule} from "@angular/forms";
import { CompanyDetailComponent } from './company-detail/company-detail.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    PropertyDetailComponent,
    PropertySliderComponent,
    AgentDetailComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
