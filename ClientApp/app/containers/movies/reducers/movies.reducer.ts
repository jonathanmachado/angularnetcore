import * as MoviesActions from '../actions/movies.actions';

export interface State {
  loading: boolean;
  data: any[];
}

export const initialState: State = {
  loading: false,
  data: undefined
};

export function reducer(
  state: State = initialState,
  action: MoviesActions.Actions
): State {
  switch (action.type) {
    case MoviesActions.GET_MOVIES_SUCCESS:
      return { ...state, loading: !state.loading, data: action.payload.result };

    default:
      return state;
  }
}
