import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import newsletter from './reducers';
let store = createStore(
  newsletter,
  applyMiddleware(thunkMiddleware)
);

// Every time the state changes, log it.
store.subscribe(() =>
  console.log('store state', store.getState())
)

module.exports = store;
