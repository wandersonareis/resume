import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private apiService: ApiService) { }

  getHeroData<T>(): Observable<T> {
    const heroDataUrl: string = ENDPOINT + "/profile";
    return this.apiService.getCachedData<T>("profile", heroDataUrl);
  }
}
