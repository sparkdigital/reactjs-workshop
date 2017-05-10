import React from 'react';

// Components.
import List from '../List/List';

const PageContent = (props) => (
  <div className="pageContent">
    <h1>My Awesome Movies App</h1>
    <List {...props}/>
  </div>
);

export default PageContent;
