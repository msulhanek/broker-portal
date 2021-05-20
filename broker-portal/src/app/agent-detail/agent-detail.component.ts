import { Component, OnInit } from '@angular/core';
import {TaskData} from "../interfaces/task-data.model";
import {PropertyService} from "../services/property.service";
import {SearchCase} from "../interfaces/search-case.model";
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styles: []
})
export class AgentDetailComponent implements OnInit {
  properties: TaskData[] = [];
  show: boolean = false;
  name: string;
  id: string;
  agent: any;
  constructor(private propertyService: PropertyService, private sanitizer: DomSanitizer, private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.name =params.get('name');
    })
    this.loadLatest();
    this.getUser();
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

  private getUser() {

    this.propertyService.getData(this.id).subscribe( search =>{
        let data = search._embedded.dataGroups[0].fields._embedded.localisedEnumerationMapFields[0].options
        let company = search._embedded.dataGroups[0].fields._embedded.localisedTextFields[1].value;
        for(let value in data){
          const user = data[value].split(' ')
          if(`${user[0]} ${user[1]}` === this.name && user[2]){
            this.agent = {
              name: user[0],
              surname: user[1],
              email: user[3],
              phone: user[2],
              company: company
            }
          }
        }
        console.log(this.agent)
      }
    )
  }

  redirectToCompany() {
    this.route.navigate(['/company', this.id]);
  }
}
