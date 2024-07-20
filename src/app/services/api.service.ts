import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cacheMap: Map<string, any> = new Map();
  constructor(private http: HttpClient) { }

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
}
