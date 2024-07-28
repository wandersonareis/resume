import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectsPageFilteredComponent } from './projects-page-filtered/projects-page-filtered.component';

const imports = [
  HomeComponent,
  ProjectsPageComponent,
  ProjectsPageFilteredComponent
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
