import { Component, OnInit } from '@angular/core';
import {TaskData} from "../interfaces/task-data.model";
import {PropertyService} from "../services/property.service";
import {SearchCase} from "../interfaces/search-case.model";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styles: []
})
export class AgentDetailComponent implements OnInit {
  properties: TaskData[] = [];
  show: boolean = false;
  constructor(private propertyService: PropertyService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadLatest();
  }

  private loadLatest() {
    this.propertyService.getSuggested('((visualId:*crt*) AND (authorEmail:*Peter Kopúň*) OR (authorName:*Peter Kopúň*))').subscribe(search => {

      search._embedded.cases.forEach((value) => {
        this.propertyService.getTask(value.stringId).subscribe(searchRequest => {
          const tasks: SearchCase[] = searchRequest._embedded.tasks as SearchCase[];
          this.propertyService.getData(tasks[0].stringId).subscribe(data => {
            const task = {
              title: value.title,
              stringId: value.stringId,
              taskStringId: tasks[0].stringId,
              ...this.propertyService.parseData(data)
            };
            this.propertyService.getImage(tasks[0].stringId).subscribe(image => {
              let objectURL = URL.createObjectURL(image);
              task.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
              this.properties.push(task);
            });

          });
      });
      this.show = true;
    });
  });
  }
}
