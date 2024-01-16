import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  name!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
