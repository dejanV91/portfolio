import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { ProjectsComponent } from './components/home-page/projects/projects.component';
import { NavbarComponent } from './components/home-page/navbar/navbar.component';
import { AboutComponent } from './components/home-page/about/about.component';
import { ContactComponent } from './components/home-page/contact/contact.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ProjectItemComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
