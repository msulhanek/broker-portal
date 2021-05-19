import {Component, OnInit} from '@angular/core';
import {SearchService} from "../services/search.service";
import {FormBuilder, Validators} from "@angular/forms";
import {SearchCase} from "../interfaces/search-case.model";
import {PropertyService} from "../services/property.service";
import {TaskData} from "../interfaces/task-data.model";
import {DomSanitizer} from "@angular/platform-browser";

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
  latestProperties: TaskData[] = [];
  show: boolean = false;
  counter: number = 0;

  constructor(private searchService: SearchService,
              private propertyService: PropertyService,
              private formBuilder: FormBuilder,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getCounties();
    this.getTypes();
    this.loadLatest();
    this.getCategories();
    this.form = this.formBuilder.group({
      county: ['', Validators.required],
      region: '',
      city: '',
      transaction: '',
      category: '',
      subcategory: '',
      priceFrom: '',
      priceTo: '',
    });
  }

  private getCounties() {
    this.searchService.getAllCounties().subscribe(
      request => {
        request._embedded.cases.forEach((value) => {
          this.counties.push(value);
        });
        MainPageComponent.sort(this.counties)
      }
    );
  }

  public setRegions(event: EventTarget): void {
    this.searchService.getTask((event as HTMLInputElement).value).subscribe(
      request => {
        this.searchService.getData(request._embedded.tasks[1].stringId).subscribe(
          request => {
            this.regions = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
          })}
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
          request => console.log(request)
            // this.subcategories = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options
        )
    })
  }
  private getTypes() {
    this.searchService.getTypes().subscribe(
      request => {
        request._embedded.cases.forEach((value) => {
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


  private static sort(list) {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  private loadLatest() {
    this.propertyService.getSuggested('(visualId:*crt*)').subscribe(search => {
      const cases: SearchCase[] = search._embedded.cases as SearchCase[];
      for (const case1 of cases) {
        this.propertyService.getTask(case1.stringId).subscribe(searchRequest => {
          const tasks: SearchCase[] = searchRequest._embedded.tasks as SearchCase[];
          this.propertyService.getData(tasks[0].stringId).subscribe(data => {
            const task = {
              title: case1.title,
              stringId: case1.stringId,
              taskStringId: tasks[0].stringId,
              ...this.propertyService.parseData(data)
            };
            this.propertyService.getImage(tasks[0].stringId).subscribe(image => {
              let objectURL = URL.createObjectURL(image);
              task.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
              this.counter = this.counter + 1;
              if(this.counter == cases.length){
                this.show = true;
              }
              this.latestProperties.push(task);
            })
          });
        });
      }
    });
  }

  onSubmit() {
    const data = this.form.getRawValue();
    console.log(data);

    // this.searchService.addAquarium(data).subscribe(
    //   res => {
    //     this.router.navigateByUrl('/dashboard').then(() => {
    //       this.router.navigate([this.router.url]);
    //     });
    //   }
    // );
  }
}
