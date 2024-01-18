import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private service: ProjectsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((url: any) => {
      this.project = this.service.getProjectById(url.id);
    });
  }
}
