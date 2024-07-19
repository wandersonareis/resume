import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroProjectCardComponent, Project } from './hero-project-card/hero-project-card.component';
import { ApiService } from '../../services/api.service';

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
  heroProjectsData!: HeroProjectsData;

  constructor(private apiService: ApiService) {
    this.apiService.getHeroProjectsData<HeroProjectsData>().subscribe(data => {
      this.heroProjectsData = data;
    });
  }
}

export interface HeroProjectsData {
  title: string;
  description: string;
  imageIcon: string;
  projects: Project[];
}