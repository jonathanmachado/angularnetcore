import { Action } from '@ngrx/store';

export const GET_MOVIES = '[Movies] - Get Movies';
export const GET_MOVIES_SUCCESS = '[Movies] - Get Movies Success';

export class GetMovies implements Action {
  readonly type = GET_MOVIES;
}
export class GetMoviesSuccess implements Action {
  readonly type = GET_MOVIES_SUCCESS;
  constructor(public payload: any) {}
}

export type Actions = GetMovies | GetMoviesSuccess;
