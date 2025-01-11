import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { HeroProjectsData } from '../../components/hero-projects/hero-projects.component';
import { ProjectsService } from '../../components/hero-projects/services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'projects-page',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  template: `
  <app-hero-projects [projectData]="projectData$ | async" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _projectsService = inject(ProjectsService);
  projectData$ = new BehaviorSubject<HeroProjectsData>({} as HeroProjectsData);
  projectData = signal<HeroProjectsData>({} as HeroProjectsData);

  ngOnInit(): void {
    this._route.url.subscribe((url) => {
      if (url[0].path === 'projects') {
        this.getProjects();
      }
    })
  }

  getProjects(): void {
    this._projectsService.getProjectsByFilterData(null).subscribe(data => {
      this.projectData$.next(data);
    });
  }
}
