import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ResumeHeroProjectsComponent } from './resume-hero-projects/resume-hero-projects.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { JobsPageComponent } from '../jobs-page/jobs-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ComponentsModule,
    ProfilePageComponent,
    AboutPageComponent,
    JobsPageComponent,
    ResumeHeroProjectsComponent,
  ],
  template: `
    <app-profile-page />
    <app-about-page />
    <app-jobs-page />
    <app-resume-hero-projects />
    <app-testimonials />
  `,
})
export class HomeComponent {}
