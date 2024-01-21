import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let section = document.querySelectorAll('.container');
    let navLinks = document.querySelectorAll('header nav a');

    if (localStorage.getItem('coords')) {
      let coords: number = Number(localStorage.getItem('coords'));
      window.scrollTo({ top: coords, behavior: 'instant' });
      localStorage.removeItem('coords');
    }

    window.onscroll = () => {
      section.forEach((sec) => {
        let current = sec as HTMLDivElement;

        let top = window.scrollY;
        let offset = current.offsetTop;
        let id = current.getAttribute('id');

        if (top >= offset - 300) {
          navLinks.forEach((links) => {
            links.classList.remove('active');
            document
              .querySelector(`header nav a[href*=${id}]`)
              ?.classList.add('active');
          });
        }
      });
    };
  }
}
