import { Injectable } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private apiService: ApiService) { }

  getHeaderData<T>(): Observable<T> {
    const navbarDataUrl: string = ENDPOINT + "/navbar";
    return this.apiService.getCachedData<T>("navbar", navbarDataUrl);
  }
}
