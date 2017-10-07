import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';

const loadStoriesEpic = action$ => (
  action$
    .do(action => console.log(action))
    .ignoreElements()
);

export const rootEpic = combineEpics(loadStoriesEpic);