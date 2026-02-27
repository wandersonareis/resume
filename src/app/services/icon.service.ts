import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private _sanitizer = inject(DomSanitizer);

  sanitize(icon: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(icon);
  }
}
