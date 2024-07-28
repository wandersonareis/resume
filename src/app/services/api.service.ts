import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
    private translateService: TranslocoService
  ) { }

  getFromHttp<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getLanguageData<T>(key: string): Observable<T> {
    return this.translateService.selectTranslateObject<T>(key);
  }
}
