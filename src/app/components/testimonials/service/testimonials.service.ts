import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../shared/constants';
import { ApiService } from '../../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private apiService: ApiService) { }

  getTestimonialsData<T>(): Observable<T> {
    const testimonialsDataUrl: string = ENDPOINT + "/testimonials";
    return this.apiService.getCachedData<T>("testimonials", testimonialsDataUrl);
  }
}
