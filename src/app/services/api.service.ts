import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cacheMap: Map<string, any> = new Map();
  constructor(
    private http: HttpClient,
    private translateService: TranslocoService
  ) { }

  getFromHttp<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getCachedData<T>(key: string, url: string): Observable<T> {
    if (this.cacheMap.has(key)) {
      return of(this.cacheMap.get(key));
    }

    return this.getFromHttp<T>(url).pipe(
      tap(data => this.cacheMap.set(key, data))
    );
  }

  getData<T>(key: string): Observable<T> {
    return this.translateService.selectTranslateObject<T>(key);
  }
}
