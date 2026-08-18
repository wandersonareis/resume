import {
  ApplicationConfig,
  isDevMode,
provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { SpeedInsightsService } from './services/speed-insights.service';
import {
  HttpTranslationSource,
} from './http-translation-source';
import { TranslationSource } from './translation-source';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    { provide: TranslationSource, useClass: HttpTranslationSource },
    provideTransloco({
      config: {
        availableLangs: ['br', 'en'],
        defaultLang: 'br',
        fallbackLang: 'en',
        missingHandler: {
          allowEmpty: true,
          useFallbackTranslation: true,
        },
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideClientHydration(withEventReplay()),
    // Initialize Vercel Speed Insights
    SpeedInsightsService,
  ],
};
