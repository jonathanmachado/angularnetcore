import * as fromMovies from './movies.reducer';

// Module State
export interface State {
  movies: fromMovies.State;
}

export const reducers = {
  movies: fromMovies.reducer
};
