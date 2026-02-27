import { Component, input } from '@angular/core';
import {
  HeroProjectCardComponent,
  Project,
} from './hero-project-card/hero-project-card.component';
import { TitleAndDescriptionComponent } from '../../shared/title-and-description/title-and-description.component';

@Component({
  selector: 'app-hero-projects',
  standalone: true,
  imports: [TitleAndDescriptionComponent, HeroProjectCardComponent],
  templateUrl: './hero-projects.component.html',
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
