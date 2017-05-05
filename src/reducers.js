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

const newsletter = combineReducers({
  headerDate,
  title
});

export default newsletter;
