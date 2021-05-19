import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PropertyService} from "../services/property.service";
import {TaskData} from "../interfaces/task-data.model";
import {SearchCase} from "../interfaces/search-case.model";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html'
})
export class PropertyDetailComponent implements OnInit {
  taskId: string;
  caseId: string;
  taskData: TaskData;
  image: SafeUrl;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private propertyService: PropertyService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.caseId = params.id);
    this.loadData();
  }

  private loadData(){
    this.propertyService.getTask(this.caseId).subscribe(searchRequest => {
      const tasks: SearchCase[] = searchRequest._embedded.tasks as SearchCase[];
      this.taskId = tasks[0].stringId;
      this.propertyService.getData(this.taskId).subscribe(data => {
        this.taskData = {
          stringId: this.caseId,
          taskStringId: this.taskId,
          ...this.propertyService.parseData(data)
        };
        this.loadImage();
      })
    });
  }

  private loadImage(){
    this.propertyService.getImage(this.taskId).subscribe(data => {
      let objectURL = URL.createObjectURL(data);
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
  }

  getPrice() {
    return this.taskData?.localisedNumberFields.find(n => n.stringId === 'text_0')?.value;
  }

  getFloorArea(){
    return this.taskData?.localisedNumberFields.find(n => n.stringId === 'text_1')?.value;
  }

  getEmail(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_13')?.value;
  }

  getSeller(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_8')?.value;
  }

  getAddress(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_6')?.value;
  }

  getDescription(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_2')?.value;
  }

  getTransactionType(){
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'enumeration_0')?.value;
  }

  getCategory(){
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_7')?.value;
  }

  getKraj(){
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_3')?.value;
  }

  getOkres(){
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_4')?.value;
  }

  getObec(){
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_5')?.value;
  }

  getSubCategory(){
    return this.taskData?.localisedEnumerationMapFields.find(n => n.stringId === 'text_14')?.value;
  }

  getCompanyName(){
    return this.taskData?.localisedTextFields?.find(n => n.stringId.includes('-text_6'))?.value || '';
  }

  getCompanyAddress(){
    return this.taskData?.localisedTextFields?.find(n => n.stringId.includes('-text_7'))?.value || '';
  }

}
