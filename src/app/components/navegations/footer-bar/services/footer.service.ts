import { Injectable } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private apiService: ApiService) { }

  getFooterData<T>(): Observable<T> {
    const footerDataUrl: string = ENDPOINT + "/footer";
    return this.apiService.getCachedData<T>("footer", footerDataUrl);
  }
}
