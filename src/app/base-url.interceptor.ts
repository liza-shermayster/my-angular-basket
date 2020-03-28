import { Injectable, isDevMode } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  baseUrl = environment.production ?  'https://web-shop-liza.herokuapp.com/api/' : 'http://localhost:3000/api/';
  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;
    const apiReq = req.clone({ url: this.baseUrl + req.url });
    return next.handle(apiReq);
  }
}
