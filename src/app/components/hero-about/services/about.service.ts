import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private apiService: ApiService) { }

  getHeroAboutData<T>(): Observable<T> {
    const heroAboutDataUrl: string = ENDPOINT + "/about";
    return this.apiService.getCachedData<T>("about", heroAboutDataUrl);
  }
}
