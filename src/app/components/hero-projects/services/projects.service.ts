import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { ENDPOINT } from '../../../shared/constants';
import { HeroProjectsData } from '../hero-projects.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private apiService: ApiService,) { }

  getHeroProjectsData<T>(): Observable<T> {
    const projectsDataUrl: string = ENDPOINT + "/projects";
    return this.apiService.getFromHttp<T>(projectsDataUrl);
  }

  getHeroProjectsByFilterData(tech: string | null): Observable<HeroProjectsData> {
    const projectsDataUrl: string = ENDPOINT + "/projects";

    return this.apiService.getCachedData<HeroProjectsData>("projects", projectsDataUrl)
      .pipe(
        map(data => {
          const projects = data.projectsList;

          if (!tech) return data;

          const filteredProjects = projects.filter(project =>
            project.technologies.includes(tech)
          );

          const newData = Object.assign({}, data, { projectsList: filteredProjects })
          return filteredProjects.length > 0 ? newData : data
        }),
        tap(console.log), shareReplay(1)
      );
  }
}
