import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {AgentDetailComponent} from "./agent-detail/agent-detail.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'detail', component: PropertyDetailComponent},
  { path: 'agent', component: AgentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
