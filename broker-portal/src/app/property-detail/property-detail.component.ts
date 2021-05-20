import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../services/property.service";
import {TaskData} from "../interfaces/task-data.model";
import {SearchCase} from "../interfaces/search-case.model";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {SubSink} from "subsink";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html'
})
export class PropertyDetailComponent implements OnInit, OnDestroy {
  taskId: string;
  caseId: string;
  taskData: TaskData;
  namesPath: {name: string, path: string}[] = [];
  images: SafeUrl[] = [];
  latestProperties: TaskData[] = [];
  show: boolean = false;
  counterTask: number = 0;
  sink = new SubSink();
  numbers: number[] = [];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private propertyService: PropertyService,
              private sanitizer: DomSanitizer,
              private router: Router) {
  }

  ngOnInit(): void {
    window.scroll({top: 0});
    this.sink.add(this.route.params.subscribe(params => {
      this.caseId = params.id;
    }));
    this.loadData();
    this.loadSuggested();
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  getPrice() {
    return this.taskData?.localisedNumberFields.find(n => n.stringId === 'text_0')?.value;
  }

  getFloorArea() {
    return this.taskData?.localisedNumberFields.find(n => n.stringId === 'text_1')?.value;
  }

  getEmail() {
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_13')?.value;
  }

  getSeller() {
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_8')?.value;
  }

  getAddress() {
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_6')?.value;
  }

  getDescription() {
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_2')?.value;
  }

  getTransactionType() {
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'enumeration_0')?.value;
  }

  getCategory() {
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_7')?.value;
  }

  getKraj() {
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_3')?.value;
  }

  getOkres() {
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_4')?.value;
  }

  getObec() {
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_5')?.value;
  }

  getSubCategory() {
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_14')?.value;
  }

  getCompanyName() {
    return this.taskData?.localisedTextFields?.find(n => n.stringId.includes('-text_6'))?.value || '';
  }

  getCompanyAddress() {
    return this.taskData?.localisedTextFields?.find(n => n.stringId.includes('-text_7'))?.value || '';
  }

  getCompanyId(){
    return this.taskData?.localisedTextFields?.find(n => n.stringId.includes('-text_7'));
  }

  redirectToCompany(){
    const taskId = this.taskData?.localisedTextFields?.find(n => n.stringId.includes('-text_7'));
    this.router.navigate(['/company', taskId.stringId.substring(0, taskId.stringId.indexOf('-'))]).then();
  }

  private loadData() {
    this.propertyService.getTask(this.caseId).subscribe(searchRequest => {
      const tasks: SearchCase[] = searchRequest._embedded.tasks as SearchCase[];
      this.taskId = tasks[0].stringId;
      this.propertyService.getData(this.taskId).subscribe(data => {
        this.namesPath.push(...data._embedded.dataGroups[0].fields._embedded.localisedFileListFields[0].value.namesPaths);
        this.taskData = {
          stringId: this.caseId,
          taskStringId: this.taskId,
          ...this.propertyService.parseData(data)
        };
        this.loadImage();
        this.loadImageList();
      })
    });
  }

  private loadImage() {
    this.propertyService.getImage(this.taskId).subscribe(data => {
      let objectURL = URL.createObjectURL(data);
      this.images.push(this.sanitizer.bypassSecurityTrustUrl(objectURL));
      this.numbers.push(0);
    })
  }

  private loadSuggested() {
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
              this.counterTask = this.counterTask + 1;
              if(this.counterTask == cases.length){
                this.show = true;
              }
              this.latestProperties.push(task);
            })
          });
        });
      }
    });
  }

  private loadImageList() {
    if(!this.namesPath){
      return;
    }
    let counter = 1;
    this.namesPath.forEach(value => {
      this.propertyService.getImageList(this.taskId, value.name).subscribe(data => {
        let objectURL = URL.createObjectURL(data);
        this.images.push(this.sanitizer.bypassSecurityTrustUrl(objectURL));
        this.numbers.push(counter);
        counter += 1;
      })
    });
  }

  redirectToAgent() {
    const taskId = this.taskData?.localisedTextFields?.find(n => n.stringId.includes('-text_7'));
    this.router.navigate(['/agent', taskId.stringId.substring(0, taskId.stringId.indexOf('-')),this.getSeller()]).then();

  }
}
