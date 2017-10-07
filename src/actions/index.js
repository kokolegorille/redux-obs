import * as types from './action_types';

export const cancelSearch = () => ({
  type: types.CANCEL_SEARCH
});

export const searchBeersError = err => ({
  type: types.SEARCHED_BEERS_ERROR,
  payload: err.message
});

export const searchBeersLoading = loading => ({
  type: types.SEARCHED_BEERS_LOADING,
  payload: loading
});

export const searchBeers = query => ({
  type: types.SEARCHED_BEERS,
  payload: query
});

export const receiveBeers = beers => ({
  type: types.RECEIVED_BEERS,
  payload: beers
});