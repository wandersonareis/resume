import { ParamMap, convertToParamMap, UrlSegment } from "@angular/router";
import { BehaviorSubject } from "rxjs";

export class ActivatedRouteStub {
    private paramMapSubject = new BehaviorSubject<ParamMap>(convertToParamMap({}));
    private urlSubject = new BehaviorSubject<UrlSegment[]>([]);
  
    readonly paramMap = this.paramMapSubject.asObservable();
    readonly url = this.urlSubject.asObservable();
  
    setParamMap(params: {}) {
      this.paramMapSubject.next(convertToParamMap(params));
    }
  
    setUrl(url: UrlSegment[]) {
      this.urlSubject.next(url);
    }
  }