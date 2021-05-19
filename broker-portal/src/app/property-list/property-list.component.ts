import { Component, OnInit } from '@angular/core';
import {TaskData} from "../interfaces/task-data.model";
import {PropertyService} from "../services/property.service";
import {SearchCase} from "../interfaces/search-case.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html'
})
export class PropertyListComponent implements OnInit {
  taskData: TaskData[] = [];
  show: boolean = false;
  counter: number = 0;

  constructor(private propertyService: PropertyService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadData();
  }

  redirect(stringId: string) {
    const property: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return property.localisedTextFields?.find(n => n.stringId === 'text_6')?.value;
  }

  getAddress(stringId: string) {
    const property: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return property.localisedTextFields?.find(n => n.stringId === 'text_6')?.value;
  }

  getPrice(stringId: string) {
    const property: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return property.localisedNumberFields?.find(n => n.stringId === 'text_0')?.value;
  }

  private loadData() {
    this.propertyService.getAll('(visualId:*crt*)').subscribe(search => {
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
              this.taskData.push(task);
              console.log(this.taskData);
            })
          });
        });
      }
    });
  }
}
