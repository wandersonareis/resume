import { Component, OnInit, signal } from '@angular/core';
import { HeroProjectsComponent, HeroProjectsData } from '../../../components/hero-projects/hero-projects.component';
import { ProjectsService } from '../../../components/hero-projects/services/projects.service';
import { ComponentsModule } from '../../../components/components.module';

@Component({
  selector: 'app-resume-hero-projects',
  standalone: true,
  providers: [ProjectsService],
  imports: [
    ComponentsModule,
    HeroProjectsComponent
  ],
  template: `
  <app-hero-projects [projectData]="resumeProjectsData()" />
  `
})
export class ResumeHeroProjectsComponent implements OnInit {
  resumeProjectsData = signal<HeroProjectsData>({} as HeroProjectsData);

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getResumeProjects().subscribe(this.resumeProjectsData.set)
  }
}
