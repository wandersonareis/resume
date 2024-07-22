import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroProjectCardComponent, Project } from './hero-project-card/hero-project-card.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './services/projects.service';

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
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tech = params.get('tech');
      this.projectsService.getProjectsByFilterData(tech).subscribe(data => {
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