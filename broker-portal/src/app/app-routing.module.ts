import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {AgentDetailComponent} from "./agent-detail/agent-detail.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {PropertyListComponent} from "./property-list/property-list.component";
import {CompanyListComponent} from "./company-list/company-list.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'detail/:id', component: PropertyDetailComponent},
  { path: 'property-list', component: PropertyListComponent},
  { path: 'agent/:id/:name', component: AgentDetailComponent},
  { path: 'company/:id', component: CompanyDetailComponent},
  { path: 'company-list', component: CompanyListComponent},
  { path: '**', component: MainPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
