import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://api.npoint.io/90a4e87f89c17143fd2a";

  constructor(private http: HttpClient) { }

  getHeaderData<T>(): Observable<T> {
    const navbarDataUrl: string = this.url + "/navbar";
    return this.http.get<T>(navbarDataUrl);
  }
  getHeroCardData<T>(): Observable<T> {
    const heroDataUrl: string = this.url + "/profile";
    return this.http.get<T>(heroDataUrl);
  }
  getContactData<T>(): Observable<T> {
    const contactDataUrl: string = this.url + "/contact";
    return this.http.get<T>(contactDataUrl);
  }
  getFooterData<T>(): Observable<T> {
    const footerDataUrl: string = this.url + "/footer";
    return this.http.get<T>(footerDataUrl);
  }
}
