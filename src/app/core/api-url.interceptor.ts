import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  addApiPathToUrl(url: string) {
    return `${environment.apiurl}${url}`;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        url: this.addApiPathToUrl(req.url)
      })
    );
  }
}
