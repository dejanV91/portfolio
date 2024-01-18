import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'project/:id', component: ProjectItemComponent },
  { path: '', pathMatch: 'prefix', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
