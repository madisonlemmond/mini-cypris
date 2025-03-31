import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey: string = environment.coreApiKey;

    if (apiKey) {
      const authenticatedRequest: HttpRequest<HttpEvent<any>> = req.clone({
        setHeaders: {
          Authorization: `Bearer ${apiKey}`
        }
      })
  
      return next.handle(authenticatedRequest);
    }

    return next.handle(req);
  }
}
