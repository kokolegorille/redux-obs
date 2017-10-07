import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createEpicMiddleware} from 'redux-observable';

import reduxApp from './reducers';
import {rootEpic} from './epics';

const configureStore = () => {
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const middlewares = [
    epicMiddleware
  ];
  
  const store = createStore(
    reduxApp,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
    
  return store;
}

export default configureStore;