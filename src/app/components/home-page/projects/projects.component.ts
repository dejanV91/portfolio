import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private service: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.service.getaAllProjects();
  }

  isProject() {
    localStorage.setItem('coords', JSON.stringify(window.scrollY));
  }
}
