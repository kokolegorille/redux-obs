import * as types from './action_types';

export const searchBeers = query => ({
  type: types.SEARCHED_BEERS,
  payload: query
});
export const receiveBeers = beers => ({
  type: types.RECEIVED_BEERS,
  payload: beers
});