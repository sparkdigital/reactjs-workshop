// Application styles.
require("../styles/app.scss");

// Application state.
let store = require('./store');

import React from 'react';
import ReactDOM from 'react-dom';

// Components.
import App from './containers/App/App';

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
