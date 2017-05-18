import axios from 'axios';
// Actions.

export function updateTitle(text) {
  return {
    type: 'UPDATE_TITLE',
    title: text
  }
}

export function updateSynopsis(text) {
  return {
    type: 'UPDATE_SYNOPSIS',
    synopsis: text
  };
}

export function updateHeaderTitle(date) {
  return {
    type: 'UPDATE_TITLE',
    date: date
  }
}

// Data fetching related.

export function requestMovies() {
  return {
    type: 'REQUEST_MOVIES'
  }
}

export function receiveMovies(movies) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: movies,
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
export function fetchMovies() {
  console.log('fetching Movies');
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestMovies())
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return axios
      .get(`http://www.omdbapi.com/?s=terminator`)
      .then(response => {
        // We can dispatch many times!
        console.log('Obtained movies', response.data);
        return dispatch(receiveMovies(response.data.Search));
      })
      .catch(error =>
        console.log('Do something with the error here.', error)
      )
  }
}
