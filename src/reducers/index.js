import * as types from '../actions/action_types';

const initialState = {
  messages: [],
  beers: [],
  loading: false
}

const reduxApp = (state = initialState, action) => {
  switch(action.type) {
    case types.SEARCHED_BEERS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case types.CANCEL_SEARCH:
      return {
        ...state,
        loading: false
      }
    case types.SEARCHED_BEERS:
      return {
        ...state,
        messages: []
      }
    case types.SEARCHED_BEERS_ERROR:
      return {
        ...state,
        messages: [{type: 'error', text: action.payload}]
      }
    case types.RECEIVED_BEERS:
      return {
        ...state,
        beers: action.payload,
        loading: false
      };
  
    default: return state
  }
}

export default reduxApp;