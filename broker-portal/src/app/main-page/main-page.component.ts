import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  counties = [];
  regions = new Map<string, string>();
  types =[];
  cities = new Map<string, string>();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.getCounties();
    this.getTypes();
  }

  private getCounties() {
    this.searchService.getAllCounties().subscribe(
        request => {
          request._embedded.cases.forEach( (value) =>{
            this.counties.push(value);
          });
          MainPageComponent.sort(this.counties)
        }
    );
  }

  public setRegions(event: EventTarget): void {
    this.searchService.getCounty((event as HTMLInputElement).value).subscribe(
      request =>
      this.searchService.getAllRegions(request._embedded.tasks[1].stringId).subscribe(
        request => {
          this.regions = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
        })
    )
  }

  public setCities(event: EventTarget): void{
    this.searchService.getRegion((event as HTMLInputElement).value).subscribe(
      request => {
        this.searchService.getAllRegions(request._embedded.tasks[1].stringId).subscribe(
          request =>this.cities = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options
        )
      })
  }

  private getTypes() {
    this.searchService.getTypes().subscribe(
      request => {
          request._embedded.cases.forEach((value)  => {
            this.types.push(value)
          })
      }
    )
    MainPageComponent.sort(this.types)
  }

  private static sort(list){
    list.sort((a, b) => a.title.localeCompare(b.title));
  }
}
