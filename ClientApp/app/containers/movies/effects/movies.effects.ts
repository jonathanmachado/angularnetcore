import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';

// Actions
import * as MoviesActions from '../actions/movies.actions';

// Services
import { MoviesService } from './../services/movies.service';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private moviesService: MoviesService) {}

  @Effect()
  getMovies$ = this.actions$.pipe(
    ofType(MoviesActions.GET_MOVIES),
    exhaustMap(() =>
      this.moviesService.getMovies().pipe(
        map(data => {
          console.log(data);
        }),
        catchError(() => of({ type: MoviesActions.GET_MOVIES + ' - Error' }))
      )
    )
  );
}
