import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

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
    let dataObservable = Observable.create((observer: Observer<T>) => {
      if (this.cacheMap.has(key)) {
        console.log(`## returning existing ${key} data`);

        observer.next(this.cacheMap.get(key));
        return observer.complete();
      }
      console.log(`** ${key} data do not yet exist; fetching from rest api...`);

      this.getFromHttp<T>(url).subscribe(data => {
        this.cacheMap.set(key, data);
        observer.next(data);
        return observer.complete();
      });

    })

    return dataObservable
  }
}
