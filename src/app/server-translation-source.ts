import { Injectable } from "@angular/core";
import { Translation } from "@jsverse/transloco";
import { of, Observable } from "rxjs";
import { TranslationSource } from "./translation-source";
import br from "../assets/i18n/br.json";
import en from "../assets/i18n/en.json";

const translations: Record<string, Translation> = { br, en };

@Injectable()
export class ServerTranslationSource extends TranslationSource {
    load(lang: string): Observable<Translation> {
        return of(translations[lang]);
    }
}