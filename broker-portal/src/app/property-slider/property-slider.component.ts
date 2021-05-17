import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../services/property.service";
import {SearchCase} from "../interfaces/search-case.model";

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styles: []
})
export class PropertySliderComponent implements OnInit {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/000000"}
  ];
  slideConfig = {
    dots: true,
    infinite: true,
    arrows: false,
    focusOnSelect: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor(private propertyService: PropertyService) {
  }

  ngOnInit(): void {
    this.propertyService.getAll().subscribe(
      property => console.log(property)
    )

    this.propertyService.getSuggested('(visualId:*crt*)').subscribe(search => {
      console.log(search);
      const cases: SearchCase[] = search._embedded.cases as SearchCase[];
      console.log(cases);
      for (const case1 of cases) {
        this.propertyService.getTask(case1.stringId).subscribe(searchRequest => {
          const tasks: SearchCase[] = searchRequest._embedded.tasks as SearchCase[];
          this.propertyService.getData(tasks[0].stringId).subscribe(data => {
            console.log('data', data);
          });
        });
      }
    });
  }


}
