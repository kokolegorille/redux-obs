import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';

import * as types from '../actions/action_types';

const loadStoriesEpic = action$ => (
  action$.ofType(types.LOAD_STORIES)
    .do(action => console.log("From Epic : ", action))
    .ignoreElements()
);

export const rootEpic = combineEpics(loadStoriesEpic);