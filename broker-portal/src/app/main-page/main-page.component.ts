import {Component, OnInit} from '@angular/core';
import {SearchService} from "../services/search.service";
import {FormBuilder, Validators} from "@angular/forms";
import {SearchCase} from "../interfaces/search-case.model";
import {PropertyService} from "../services/property.service";
import {TaskData} from "../interfaces/task-data.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Property}  from "../interfaces/property";
import {Router} from "@angular/router";
import {count} from "rxjs/operators";

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
  properties : any[] = [];
  filters: Property[];
  search: boolean = false;
  property: any;
  constructor(private searchService: SearchService,
              private propertyService: PropertyService,
              private formBuilder: FormBuilder,
              private sanitizer: DomSanitizer,private router: Router) {
  }

  ngOnInit(): void {
    this.getCounties();
    this.getTypes();
    this.loadLatest();
    this.getCategories();
    this.loadData();
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
          request =>
            this.subcategories = request._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options
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

  getTransactionType(stringId: string): string {
    const property: TaskData = this.latestProperties.find(p => p.stringId === stringId);
    return property.localisedEnumerationMapFields.find(n => n.stringId === 'enumeration_0').value;
  }
  getTransactionBadgeColor(stringId: string): string {
    switch (stringId) {
      case 'Predaj':
        return 'bg-success';
      case 'Kúpa':
        return 'bg-danger';
      default:
        return 'bg-info';
    }
  }

  getTypeBadgeColor(stringId: string): string {
    switch (stringId) {
      case 'Domy':
        return 'house';
      case 'Chaty':
        return 'cabin';
      default:
        return 'flat';
    }
  }

  redirect(stringId: string): void {
    this.router.navigate([`/detail`, stringId]).then();
  }

  private static sort(list) {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  private loadData() {
    this.searchService.search('(visualId:*crt*)').subscribe(search => {
      search._embedded.cases.forEach((value) => {
        this.propertyService.getTask(value.stringId).subscribe(searchRequest => {
          const tasks: SearchCase[] = searchRequest._embedded.tasks as SearchCase[];
          this.propertyService.getData(tasks[0].stringId).subscribe(data => {
            let property = new Property();
            let transactions = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[0].options
            let trans = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[0].value
            let categories = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[1].options
            let cat = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[1].value
            let counties = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[2].options
            let county = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[2].value
            let regions = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[3].options
            let region = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[3].value
            let cities = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[4].options
            let city = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[4].value
            let subcategories = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[5].options
            let sub = data._embedded.dataGroups[4].fields._embedded.localisedEnumerationMapFields[5].value
            let price = data._embedded.dataGroups[4].fields._embedded.localisedNumberFields[0].value

            property.id = value.stringId;
            property.title = value.title;
            property.address = data._embedded.dataGroups[4].fields._embedded.localisedTextFields[1].value
            property.transaction = transactions[trans];
            property.category = categories[cat];
            property.county = counties[county];
            property.region = regions[region];
            property.city = cities[city];
            property.county = counties[county];
            property.subcategory = subcategories[sub];
            property.price = Number(price);

            this.propertyService.getImage(tasks[0].stringId).subscribe(image => {
              let objectURL = URL.createObjectURL(image);
              property.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
              this.properties.push(property);
            });

          });
        });
      })
      this.show = true;
    })
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
    this.filters = this.properties
    this.filter(data)

  }

  private filter(data) {

    if (data.priceFrom != '') {
      const from = Number(data.priceFrom)
      this.filters = this.filters.filter(c => c.price >= from)
    }

    if (data.priceTo != '') {
      const to = Number(data.priceTo)
      this.filters = this.filters.filter(c => c.price <= to)
    }


    if (data.county != '') {
      const county = this.counties.find(c => c.stringId === data.county).title
      this.filters = this.filters.filter(c => c._county === county)
    }

    if (data.region != '') {
      const region = this.regions[data.region];
      this.filters = this.filters.filter(c => c.region === region)
    }

    if (data.city != '') {
      const city = this.cities[data.city];
      this.filters = this.filters.filter(c => c.city === city)
    }

    if (data.category != '') {
      const category = this.categories.find(c => c.stringId === data.category).title
      this.filters = this.filters.filter(c => c.category === category)
    }

    if (data.subcategory != '') {
      const subcategory = this.subcategories[data.subcategory];
      this.filters = this.filters.filter(c => c.subcategory === subcategory)
    }
    this.search = true;
    console.log(this.filters);
  }


  translate() {
    const inz = document.querySelector('#inz')
    if(inz.classList.contains('move')){
      inz.classList.remove('move')

    } else{
      inz.classList.add('move')

    }

  }
}
