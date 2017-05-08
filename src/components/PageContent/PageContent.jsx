import React from 'react';

// Components.
import List from '../List/List';

const PageContent = (props) => (
  <div className="list">
    <List {...props} />
  </div>
);

export default PageContent;
