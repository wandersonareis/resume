import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroProjectCardComponent, Project } from './hero-project-card/hero-project-card.component';

@Component({
  selector: 'app-hero-projects',
  standalone: true,
  imports: [
    SharedModule,
    HeroProjectCardComponent
  ],
  templateUrl: './hero-projects.component.html',
  styleUrl: './hero-projects.component.css'
})
export class HeroProjectsComponent {
  projectData = input<HeroProjectsData | null>({} as HeroProjectsData);
}

export interface HeroProjectsData {
  title: string;
  description: string;
  imageIcon: string;
  projectsList: Project[];
}
