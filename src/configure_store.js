import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reduxApp from './reducers';

const configureStore = () => {
  const middlewares = [];
  
  const store = createStore(
    reduxApp,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
    
  return store;
}

export default configureStore;