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

  getProjectsByFilterData(tech: string | null): Observable<HeroProjectsData> {
    return this.apiService.getData<HeroProjectsData>("projects").pipe(
      map((data: HeroProjectsData) => ({
        ...data,
        projectsList: tech
          ? data.projectsList.filter(project => project.technologies.includes(tech))
          : data.projectsList
      }))
    );
  }

}
