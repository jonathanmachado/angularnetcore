import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CacheService } from '@ngx-utils/cache';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(
    private cache: CacheService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    if (
      isPlatformBrowser(this.platformId) &&
      this.cache.has(request.urlWithParams)
    ) {
      const response = new HttpResponse({
        body: this.cache.get(request.urlWithParams),
        status: 200
      });
      return of(response).pipe(
        tap(() => this.cache.clear(request.urlWithParams))
      );
    }

    return next.handle(request).pipe(
      tap((response: any) => {
        if (isPlatformServer(this.platformId)) {
          this.cache.set(request.urlWithParams, response.body);
        }
      })
    );
  }
}
