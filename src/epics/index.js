import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';

import * as types from '../actions/action_types';
import {receiveBeers} from '../actions';

const beers = `https://api.punkapi.com/v2/beers`;
const search = term => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajax = term => Observable.ajax.getJSON(search(term));

const searchBeersEpic = action$ => (
  action$.ofType(types.SEARCHED_BEERS)
    .debounceTime(500)
    .switchMap(({payload}) =>
      ajax(payload)
        .map(receiveBeers)
    )
);

export const rootEpic = combineEpics(searchBeersEpic);