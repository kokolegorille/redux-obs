import * as types from '../actions/action_types';

const stories = [
  {
    "id" : 1,
    "title" : "Yo"
  },
  {
    "id" : 2,
    "title" : "Yi"
  }
];

const initialState = {
  items: []
}

const reduxApp = (state = initialState, action) => {
  switch(action.type) {
    case types.LOAD_STORIES:
      return {
        items: stories.slice()
      }
    case types.CLEAR_STORIES:
      return initialState;
  
    default: return state
  }
}

export default reduxApp;