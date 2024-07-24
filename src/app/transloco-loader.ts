import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);
    #url = 'https://api.npoint.io/24973a3d86dcd56a6a2b';

    getTranslation(lang: string) {
        const url = `${this.#url}/${lang}`;
        return this.http.get<Translation>(url);
    }
}
