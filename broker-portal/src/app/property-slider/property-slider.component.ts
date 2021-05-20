import {Component, Input, OnInit} from '@angular/core';
import {TaskData} from "../interfaces/task-data.model";
import {PROPERTY_SLIDER_CONFIG} from "./property-slider.config";
import {Router} from "@angular/router";

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styles: []
})
export class PropertySliderComponent implements OnInit{

  @Input() latestProperties: TaskData[];

  img: "http://placehold.it/350x150/000000";

  slideConfig = PROPERTY_SLIDER_CONFIG;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getPrice(stringId: string): string {
    const property: TaskData = this.latestProperties.find(p => p.stringId === stringId);
    return property.localisedNumberFields.find(n => n.stringId === 'text_0').value;
  }

  getTransactionType(stringId: string): string {
    const property: TaskData = this.latestProperties.find(p => p.stringId === stringId);
    return property.localisedEnumerationMapFields.find(n => n.stringId === 'enumeration_0').value;
  }

  getType(stringId: string): string {
    const property: TaskData = this.latestProperties.find(p => p.stringId === stringId);
    return property.localisedEnumerationMapFields.find(n => n.stringId === 'text_7').value;
  }

  getAddress(stringId: string): string {
    const property: TaskData = this.latestProperties.find(p => p.stringId === stringId);
    return property.localisedTextFields.find(n => n.stringId === 'text_6').value;
  }

  getObec(stringId: string): string {
    const property: TaskData = this.latestProperties.find(p => p.stringId === stringId);
    return property.localisedEnumerationMapFields.find(n => n.stringId === 'text_5').value;
  }

  getTransactionBadgeColor(stringId: string): string {
    switch (this.getTransactionType(stringId)) {
      case 'Predaj':
        return 'bg-success';
      case 'Kúpa':
        return 'bg-danger';
      default:
        return 'bg-info';
    }
  }

  getTypeBadgeColor(stringId: string): string {
    switch (this.getType(stringId)) {
      case 'Domy':
        return 'house';
      case 'Chaty':
        return 'cabin';
      default:
        return 'flat';
    }
  }

  redirect(stringId: string): void {
    const property: TaskData = this.latestProperties.find(p => p.stringId === stringId);
    this.router.navigate([`/detail`, property.stringId]).then();
  }
}
