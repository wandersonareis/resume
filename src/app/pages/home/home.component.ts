import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ResumeHeroProjectsComponent } from './resume-hero-projects/resume-hero-projects.component';
import { PagesModule } from '../pages.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ComponentsModule,
    PagesModule,
    ResumeHeroProjectsComponent
  ],
  template: `
<app-profile-page />
<app-about-page />
<app-hero-skills />
<app-hero-jobs />
<app-resume-hero-projects />
<app-testimonials />
`
})
export class HomeComponent {

}
