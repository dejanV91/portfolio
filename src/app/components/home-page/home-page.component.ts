import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    let scrollY = localStorage.getItem('offsetTop');
    window.scroll({
      top: Math.abs(Number(scrollY)),
      behavior: 'instant',
    });
    localStorage.removeItem('offsetTop');
  }
}
