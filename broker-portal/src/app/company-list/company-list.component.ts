import { Component, OnInit } from '@angular/core';
import {PropertyService} from "../services/property.service";
import {TaskData} from "../interfaces/task-data.model";
import {SearchCase} from "../interfaces/search-case.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  taskData: TaskData[] = [];

  constructor(private propertyService: PropertyService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  getCompanyName(stringId: string){
    const company: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return company.localisedTextFields?.find(n => n.stringId === 'text_6')?.value;
  }

  getIco(stringId: string) {
    const company: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return company?.localisedTextFields.find(n => n.stringId === 'text_8')?.value;
  }

  getUrl(stringId: string) {
    const company: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return company?.localisedTextFields.find(n => n.stringId === 'text_10')?.value;
  }

  getCompanyOwner(stringId: string) {
    const company: TaskData = this.taskData?.find(p => p.stringId === stringId);
    return company?.localisedTextFields.find(n => n.stringId === 'text_2')?.value;
  }

  redirect(stringId: string) {
    const company: TaskData = this.taskData?.find(p => p.stringId === stringId);
    this.router.navigate(['/company',company.taskStringId]).then();
  }

  private loadData() {
    this.propertyService.getAll('(visualId:*CMP*)').subscribe(search => {
      const cases: SearchCase[] = search?._embedded?.cases as SearchCase[];
      for (const case1 of cases) {
        this.propertyService.getTask(case1.stringId).subscribe(searchRequest => {
          const tasks: SearchCase[] = searchRequest?._embedded?.tasks as SearchCase[];
          this.propertyService.getData(tasks[0]?.stringId).subscribe(data => {
            const task = {
              title: case1.title,
              stringId: case1.stringId,
              taskStringId: tasks[0]?.stringId,
              ...this.propertyService.parseData(data)
            };
            this.taskData.push(task);
          });
        });
      }
    });
  }

}
