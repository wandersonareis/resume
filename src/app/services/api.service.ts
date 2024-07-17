import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://api.npoint.io/90a4e87f89c17143fd2a";

  constructor(private http: HttpClient) { }

  getFooterData<T>(): Observable<T> {
    const footerDataUrl: string = this.url + "/footer";
    return this.http.get<T>(footerDataUrl);
  }
}
