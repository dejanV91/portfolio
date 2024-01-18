import { Injectable } from '@angular/core';
import { Project } from '../models/project';

const projects = [
  {
    id: 1,
    name: 'Busplus',
    image: 'assets/images/busplus2.jpg',
    description:
      'Busplus je aplikacija koja vam omogućava da pratite lokaciju autobusa u realnom vremenu i saznate predviđeno vreme dolaska na vašu stanicu.',
    tools: ['Angular', 'Bootstrap', 'Css', ' HTML'],
    site: 'https://dejanv91.github.io/busplus/home',
  },
  {
    id: 2,
    name: 'Search Github Users',
    image: 'assets/images/searchGithubUser.png',
    description:
      'Search Github Users is an application that allows users to search for other GitHub users by username and view their profiles and repositories.',
    tools: ['React', 'Css', ' HTML'],
    site: 'https://dejanv91.github.io/search-github-users/#/login',
  },

  {
    id: 3,
    name: 'Restaurant App',
    image: 'assets/images/appFood.png',
    description:
      'Food app enables quick food search, tagging-based filtering, and easy cart addition',
    tools: ['Angular', 'Typescript', 'Css', ' HTML'],
    site: 'https://dejanv91.github.io/app-food/',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getaAllProjects(): Project[] {
    return projects;
  }

  getProjectById(id: number): Project {
    let project: Project;
    project = projects[id - 1];
    return project;
  }
}
