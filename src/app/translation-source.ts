import { Translation } from "@jsverse/transloco";
import { Observable } from "rxjs";

export abstract class TranslationSource {
    abstract load(lang: string): Observable<Translation>;
}