import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HeroProjectsData } from '../components/hero-projects/hero-projects.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://api.npoint.io/90a4e87f89c17143fd2a";

  constructor(private http: HttpClient) { }

  getHeaderData<T>(): Observable<T> {
    const navbarDataUrl: string = this.url + "/navbar";
    return this.http.get<T>(navbarDataUrl);
  }
  getHeroCardData<T>(): Observable<T> {
    const heroDataUrl: string = this.url + "/profile";
    return this.http.get<T>(heroDataUrl);
  }
  getHeroAboutData<T>(): Observable<T> {
    const heroAboutDataUrl: string = this.url + "/about";
    return this.http.get<T>(heroAboutDataUrl);
  }
  getHeroSkillsData<T>(): Observable<T> {
    const heroSkillsUrl: string = this.url + "/skills";
    return this.http.get<T>(heroSkillsUrl);
  }
  getHeroJobsData<T>(): Observable<T> {
    const jobsDataUrl: string = this.url + "/experiences";
    return this.http.get<T>(jobsDataUrl);
  }
  getHeroProjectsData<T>(): Observable<T> {
    const projectsDataUrl: string = this.url + "/projects";
    return this.http.get<T>(projectsDataUrl);
  }
  getHeroProjectsByFilterData(tech: string | null): Observable<HeroProjectsData> {
    return this.getHeroProjectsData<HeroProjectsData>()
      .pipe(
        map(data => {
          const projects = data.projectsList;

          if (!tech) return data;

          const filteredProjects = projects.filter(project =>
            project.technologies.includes(tech)
          );

          const newData = Object.assign({}, data, { projectsList: filteredProjects })
          return filteredProjects.length > 0 ? newData : data
        })
      );
  }
  getTestimonialsData<T>(): Observable<T> {
    const testimonialsDataUrl: string = this.url + "/testimonials";
    return this.http.get<T>(testimonialsDataUrl);
  }
  getContactData<T>(): Observable<T> {
    const contactDataUrl: string = this.url + "/contact";
    return this.http.get<T>(contactDataUrl);
  }
  getFooterData<T>(): Observable<T> {
    const footerDataUrl: string = this.url + "/footer";
    return this.http.get<T>(footerDataUrl);
  }
}
