import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Application styles.
require("../styles/app.scss");

// Application state.
let store = require('./store');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Components.
import App from './containers/App/App';
import EditionContainer from './containers/EditionContainer/EditionContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <h1>My awesome movies application</h1>
        <Route exact path="/" component={App} />
        <Route path="/edit/:id" component={EditionContainer} />
      </div>
    </Router>
  </Provider>, 
  document.getElementById('app')
);
