import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class HeroJobsService {
  constructor(private apiService: ApiService,) { }

  getHeroJobsData<T>(): Observable<T> {
    const jobsDataUrl: string = ENDPOINT + "/experiences";
    return this.apiService.getCachedData<T>("jobs", jobsDataUrl);
  }
}
