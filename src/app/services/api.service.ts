import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private translateService: TranslocoService
  ) { }

  getLanguageData<T>(key: string): Observable<T> {
    return this.translateService.selectTranslateObject<T>(key);
  }
}
