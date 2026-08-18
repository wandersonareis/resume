import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { Observable } from "rxjs";
import { TranslationSource } from "./translation-source";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private source = inject(TranslationSource);

    getTranslation(lang: string): Observable<Translation> {
        return this.source.load(lang);
    }
}