import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        const url = `${environment.API_URL}/${lang}`;
        return this.http.get<Translation>(url);
    }
}
