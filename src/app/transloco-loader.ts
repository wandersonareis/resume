import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { ENDPOINT } from "./shared/constants";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        const url = `${ENDPOINT}/${lang}`;
        return this.http.get<Translation>(`${ENDPOINT}/${lang}`);
    }
}
