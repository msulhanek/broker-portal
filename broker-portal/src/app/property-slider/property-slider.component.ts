import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-slider',
  templateUrl: './property-slider.component.html',
  styles: [
  ]
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

  constructor() { }

  ngOnInit(): void {
  }



}
