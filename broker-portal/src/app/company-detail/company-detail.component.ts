import { Component, OnInit } from '@angular/core';
import {TaskData} from "../interfaces/task-data.model";
import {PropertyService} from "../services/property.service";
import {ActivatedRoute} from "@angular/router";
import {SubSink} from "subsink";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html'
})
export class CompanyDetailComponent implements OnInit {

  taskData: TaskData;
  taskId: string;
  sink = new SubSink();
  realtors = new Map<string, string>();

  constructor(private propertyService: PropertyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sink.add(this.route.params.subscribe(params => this.taskId = params.id));
    this.loadData();
  }

  getAddress(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_7')?.value;
  }

  getName(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_6')?.value;
  }

  getDic(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_9')?.value;
  }

  getIco(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_8')?.value;
  }

  getCompanyOwner(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_2')?.value;
  }

  getUrl(){
    return this.taskData?.localisedTextFields.find(n => n.stringId === 'text_10')?.value;
  }

  private loadData() {
    this.sink.add(this.propertyService.getData(this.taskId).subscribe(data => {
      this.realtors = data._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options;
      this.taskData = {
        taskStringId: this.taskId,
        ...this.propertyService.parseData(data)
      };
      console.log(this.taskData);
    }));
  }

  parseRealtor(value: string, number: number):string {
    const parsedValue: string[] = value.split(' ');
    switch (number) {
      case 0: return parsedValue[0] + " " + parsedValue[1];
      case 1: return parsedValue[2];
      case 2: return parsedValue[3];
    }
  }
}
