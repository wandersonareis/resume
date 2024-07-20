import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroProjectCardComponent, Project } from './hero-project-card/hero-project-card.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

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
export class HeroProjectsComponent implements OnInit {
  heroProjectsData!: HeroProjectsData;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tech = params.get('tech');
      this.apiService.getHeroProjectsByFilterData(tech).subscribe(data => {
        this.heroProjectsData = data;
      });
    })
  }
}

export interface HeroProjectsData {
  title: string;
  description: string;
  imageIcon: string;
  projectsList: Project[];
}