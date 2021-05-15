import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertySliderComponent } from './property-slider/property-slider.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import {HttpClientModule} from "@angular/common/http";


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    PropertyDetailComponent,
    PropertySliderComponent,
    AgentDetailComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
