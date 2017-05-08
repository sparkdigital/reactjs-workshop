import { combineReducers } from 'redux';

// Global title.
function title(state = '', action) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return action.title;
    default:
      return state;
  }  
}

// Header Reducers.
function headerDate(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_HEADER_DATE':
      return {
        ...state,
        date: action.date
      };
    default:
      return state;
  }
}

function movies(state = {
  isFetching: false,
  didInvalidate: false,
  movies: []
}, action) {
  switch (action.type) {
    case 'REQUEST_MOVIES':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case 'RECEIVE_MOVIES':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        movies: action.movies,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const newsletter = combineReducers({
  headerDate,
  title,
  movies
});

export default newsletter;
