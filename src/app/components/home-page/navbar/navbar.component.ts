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

    window.onscroll = () => {
      section.forEach((sec) => {
        let currentSection = sec as HTMLDivElement;

        let top = window.scrollY;
        let offset = currentSection.offsetTop;
        let id = currentSection.getAttribute('id');

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
