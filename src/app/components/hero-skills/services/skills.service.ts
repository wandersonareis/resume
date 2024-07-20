import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { ENDPOINT } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private apiService: ApiService) { }

  getHeroSkillsData<T>(): Observable<T> {
    const heroSkillsUrl: string = ENDPOINT + "/skills";
    return this.apiService.getCachedData<T>("skills", heroSkillsUrl);
  }
}
