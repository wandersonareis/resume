import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, OnDestroy, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

// code from: https://dev.to/this-is-angular/dark-mode-with-analog-tailwind-4049
type Theme = 'light' | 'dark';
@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private _platformId = inject(PLATFORM_ID);
  private _renderer = inject(RendererFactory2).createRenderer(null, null);
  private _document = inject(DOCUMENT);

  private _theme$ = new ReplaySubject<Theme>(1);
  private _destroyed$ = new Subject<void>();

  theme$ = this._theme$.asObservable();

  constructor() {
    this.syncThemeFromLocalStorage();
    this.toggleClassOnThemeChanges();
  }
  private syncThemeFromLocalStorage(): void {
    if (isPlatformBrowser(this._platformId)) {
      this._theme$.next(
        localStorage.getItem('theme') as Theme === 'dark' ? 'dark' : 'light'
      );
    }
  }
  private toggleClassOnThemeChanges(): void {
    this.theme$.pipe(takeUntil(this._destroyed$)).subscribe((theme: Theme) => {
      if (theme === 'dark') {
        this._renderer.addClass(this._document.documentElement, 'dark');
      } else {
        if (this._document.documentElement.className.includes('dark')) {
          this._renderer.removeClass(this._document.documentElement, 'dark');
        }
      }
    });
  }

  toggleDarkMode(): void {
    const newTheme = localStorage.getItem('theme') as Theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    this._theme$.next(newTheme);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
