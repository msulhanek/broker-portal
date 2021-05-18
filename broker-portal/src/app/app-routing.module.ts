import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {AgentDetailComponent} from "./agent-detail/agent-detail.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'detail/:id', component: PropertyDetailComponent},
  { path: 'agent', component: AgentDetailComponent},
  { path: 'company', component: CompanyDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
