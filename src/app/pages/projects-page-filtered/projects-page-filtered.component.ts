import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../components/hero-projects/services/projects.service';
import { BehaviorSubject } from 'rxjs';
import { HeroProjectsData } from '../../components/hero-projects/hero-projects.component';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'projects-page-filtered',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  template: `
  <app-hero-projects [projectData]="projectData$ | async" />
  `,
})
export class ProjectsPageFilteredComponent implements OnInit {
  projectData$ = new BehaviorSubject<HeroProjectsData>({} as HeroProjectsData);
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tech = params.get('tech');
      this.getProjectsByFilterData(tech);

    })
  }

  getProjectsByFilterData(tech: string | null): void {
    this.projectsService.getProjectsByFilterData(tech).subscribe(data => {
      this.projectData$.next(data);
    });
  }
}
