import { combineReducers } from 'redux';

// Global title.
function movie(state = {
  title: '',
  synopsis: ''
}, action) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, {title: action.title});
    case 'UPDATE_SYNOPSIS':
      return Object.assign({}, state, {synopsis: action.synopsis});
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

const movieApp = combineReducers({
  movie,
  movies
});

export default movieApp;
