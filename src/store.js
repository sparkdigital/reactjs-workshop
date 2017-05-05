import { createStore } from 'redux';
import newsletter from './reducers';
let store = createStore(newsletter);

// Every time the state changes, log it.
store.subscribe(() =>
  console.log('store state', store.getState())
)

module.exports = store;
