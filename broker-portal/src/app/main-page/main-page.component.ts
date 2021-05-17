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
          this.sort(this.counties)
        }
    );
  }

  private setRegions(event: EventTarget): void {
    this.searchService.getCounty((event as HTMLInputElement).value).subscribe(
      request =>
      this.searchService.getAllRegions(request._embedded.tasks[1].stringId).subscribe(
        request => { console.log(request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options);
          this.regions = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
          // this.sort(this.regions)
        }
      )
    )
  }

  private getTypes() {
    this.searchService.getTypes().subscribe(
      request => {
          request._embedded.cases.forEach((value)  => {
            this.types.push(value)
          })
      }
    )
    this.sort(this.types)
  }

  private sort(list){
    list.sort((a, b) => a.title.localeCompare(b.title));
  }
}
