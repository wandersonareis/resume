import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ResumeHeroProjectsComponent } from './resume-hero-projects/resume-hero-projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ComponentsModule,
    ResumeHeroProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
