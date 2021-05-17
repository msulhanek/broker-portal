import { Component, OnInit } from '@angular/core';
import {SearchService} from "../services/search.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  counties = [];
  regions = new Map<string, string>();
  types =[];
  cities = new Map<string, string>();
  form: any;
  categories = [];
  subcategories: Map<string, string>;
  constructor(private searchService: SearchService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getCounties();
    this.getTypes();
    this.getCategories();
    this.form = this.formBuilder.group({
      county: ['', Validators.required],
      region: '',
      city: '',
      category: '',
      subcategory: '',
      priceFrom: '',
      priceTo: '',
    });
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
    this.searchService.getTask((event as HTMLInputElement).value).subscribe(
      request =>
      this.searchService.getTask(request._embedded.tasks[1].stringId).subscribe(
        request => {
          this.regions = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
        })
    )
  }

  public setCities(event: EventTarget): void{
    this.searchService.getTask((event as HTMLInputElement).value).subscribe(
      request => {
        this.searchService.getData(request._embedded.tasks[1].stringId).subscribe(
          request =>this.cities = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options
        )
      })
  }

  public setSubCategories(event: EventTarget): void{
    this.searchService.getTask((event as HTMLInputElement).value).subscribe(
      request => {
        this.searchService.getData(request._embedded.tasks[1].stringId).subscribe(
          request =>this.subcategories = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options
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

  private getCategories(){
    this.searchService.getCategories().subscribe(
      request => {
        request._embedded.cases.forEach((value) => {
          this.categories.push(value);
        });
        MainPageComponent.sort(this.categories);
      });
  }


  private static sort(list){
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  onSubmit() {

  }
}
