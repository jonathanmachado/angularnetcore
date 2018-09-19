import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ORIGIN_URL } from '@nguniversal/aspnetcore-engine/tokens';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseUrl: string;

  constructor(private http: HttpClient, private injector: Injector) {
    this.baseUrl = this.injector.get(ORIGIN_URL);
  }

  getMovies() {
    return this.http.get<any>(`${this.baseUrl}/api/movies`);
  }
}
