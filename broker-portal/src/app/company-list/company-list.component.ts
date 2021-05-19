import { Component, OnInit } from '@angular/core';
import {PropertyService} from "../services/property.service";
import {TaskData} from "../interfaces/task-data.model";
import {SearchCase} from "../interfaces/search-case.model";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  taskData: TaskData[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.loadData();
  }

  getCompanyName(stringId: string){
    const company: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return company.localisedTextFields?.find(n => n.stringId === 'text_6')?.value;
  }

  private loadData() {
    this.propertyService.getAll('(visualId:*CMP*)').subscribe(search => {
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
                this.taskData.push(task);
              });
              console.log(this.taskData);
          });
        }
    });
  }
}
