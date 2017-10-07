import * as types from '../actions/action_types';

const initialState = {
  beers: [],
  loading: false
}

const reduxApp = (state = initialState, action) => {
  switch(action.type) {
    case types.SEARCHED_BEERS:
      return {
        ...state,
        loading: true
      }
    case types.RECEIVED_BEERS:
      return {
        beers: action.payload,
        loading: false
      };
  
    default: return state
  }
}

export default reduxApp;