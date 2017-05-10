// Application styles.
require("../styles/app.scss");

import React from 'react';
import ReactDOM from 'react-dom';

// Components.
import App from './containers/App/App';

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
