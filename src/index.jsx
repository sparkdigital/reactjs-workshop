import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Application styles.
require("../styles/app.scss");

// Application state.
let store = require('./store');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components.
import App from './containers/App/App';

const exercise = `Goal to achieve: Considering the previous explanation of actions being
  passed as a function callback to a component, first goal here is to get the input
  changes reflected on the (redux) application state. Second goal: re-use the input field
  to set a movie year and image. At last, we can post the movie into the api. Probably a
  SMALL refactor on the application state structure could be needed ; )`;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <h1>My awesome movies application</h1>
        <p>{exercise}</p>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('app')
);
