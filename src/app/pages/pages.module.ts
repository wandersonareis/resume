import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectsPageFilteredComponent } from './projects-page-filtered/projects-page-filtered.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const imports = [
  HomeComponent,
  AboutPageComponent,
  ContactPageComponent,
  ProfilePageComponent,
  ProjectsPageComponent,
  ProjectsPageFilteredComponent,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...imports
  ],
  exports: imports
})
export class PagesModule { }
