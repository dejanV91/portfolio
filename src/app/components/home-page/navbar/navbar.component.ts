import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let isProjectsScroll = localStorage.getItem('projectsPage') ? true : false;
    if (isProjectsScroll) {
    }
    localStorage.removeItem('projectsPage');
  }

  changeNav(index: number, fragment: string) {
    let active = document.querySelector('.active') as HTMLDivElement;
    active.style.transform = 'translate3d(' + index * 100 + '%,0,0)';
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
