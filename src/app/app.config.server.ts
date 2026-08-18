import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import {
  ServerTranslationSource,
} from './server-translation-source';
import { TranslationSource } from './translation-source';

const serverConfig: ApplicationConfig = {
  providers: [
    { provide: TranslationSource, useClass: ServerTranslationSource },
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
