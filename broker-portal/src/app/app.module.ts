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
import { ContactFormComponent } from './contact-form/contact-form.component';
import {RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "./interfaces/custom-route-reuse-strategy";
import { PropertyListComponent } from './property-list/property-list.component';
import { CompanyListComponent } from './company-list/company-list.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    PropertyDetailComponent,
    PropertySliderComponent,
    AgentDetailComponent,
    CompanyDetailComponent,
    ContactFormComponent,
    PropertyListComponent,
    CompanyListComponent
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
    },
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
