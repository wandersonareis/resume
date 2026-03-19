import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { injectSpeedInsights } from '@vercel/speed-insights';

@Injectable({
  providedIn: 'root'
})
export class SpeedInsightsService {
  private _platformId = inject(PLATFORM_ID);

  constructor() {
    // Only initialize Speed Insights in the browser (not during SSR)
    if (isPlatformBrowser(this._platformId)) {
      this.initializeSpeedInsights();
    }
  }

  private initializeSpeedInsights(): void {
    injectSpeedInsights({
      framework: 'angular'
    });
  }
}
