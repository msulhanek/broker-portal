import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  logo = 'assets/images/logo.png';
  constructor() {
  }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', ['$event'])

  onWindowScroll($event: Event) {
    let element = document.querySelector('#navbar') as HTMLElement;

    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('sticky');
      this.logo = 'assets/images/logo-blue.png'
    } else {
      element.classList.remove('sticky');
      this.logo = 'assets/images/logo.png';
    }
  }
}
