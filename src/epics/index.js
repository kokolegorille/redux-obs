import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';

import * as types from '../actions/action_types';
import {
  receiveBeers,
  searchBeersError,
  searchBeersLoading
} from '../actions';

const beers = `https://api.punkapi.com/v2/beers`;
const search = term => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajax = term => Observable.ajax.getJSON(search(term));

const searchBeersEpic = action$ => (
  action$.ofType(types.SEARCHED_BEERS)
    .debounceTime(500)
    .filter(action => action.payload !== '')
    .switchMap(({payload}) => {
      // Loading state in UI
      const loading = Observable.of(searchBeersLoading(true));
      
      // External API call
      const request = ajax(payload)
        // .delay(5000) // Delay to simulate network latency
        .takeUntil(action$.ofType(types.CANCEL_SEARCH))
        .map(receiveBeers)
        .catch(err => Observable.of(searchBeersError(err)));
      
      // Order is important!
      return Observable.concat(
        loading,
        request
      );
    })
);

export const rootEpic = combineEpics(searchBeersEpic);