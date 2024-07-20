import { Injectable } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiService: ApiService) { }

  getContactData<T>(): Observable<T> {
    const contactDataUrl: string = ENDPOINT + "/contact";
    return this, this.apiService.getCachedData<T>("contact", contactDataUrl);
  }
}
