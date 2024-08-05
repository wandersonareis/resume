import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { map, Observable, take } from 'rxjs';
import { HeroProjectsData } from '../hero-projects.component';
import { Project } from '../hero-project-card/hero-project-card.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private apiService: ApiService,) { }

  getProjectsByFilterData(tech: string | null): Observable<HeroProjectsData> {
    return this.apiService.getLanguageData<HeroProjectsData>("projects").pipe(
      map((data: HeroProjectsData) => ({
        ...data,
        projectsList: tech
          ? data.projectsList.filter(project => project.technologies.includes(tech))
          : data.projectsList
      }))
    );
  }

  getResumeProjects(size: number = 3): Observable<HeroProjectsData> {
    return this.apiService.getLanguageData<HeroProjectsData>("projects")
      .pipe(
        map((data: HeroProjectsData) => ({
          ...data,
          projectsList: data.projectsList
            .filter((project: Project) => project.isImportant)
        })
        ),
        take(size)
      );
  }

}
