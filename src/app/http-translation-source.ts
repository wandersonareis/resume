import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Translation } from "@jsverse/transloco";
import { Observable } from "rxjs";
import { TranslationSource } from "./translation-source";

@Injectable()
export class HttpTranslationSource extends TranslationSource {
    private http = inject(HttpClient);

    load(lang: string): Observable<Translation> {
        return this.http.get<Translation>(`assets/i18n/${lang}.json`);
    }
}