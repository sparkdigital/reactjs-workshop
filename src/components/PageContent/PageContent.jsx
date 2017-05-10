import React from 'react';

// Components.
import List from '../List/List';

const PageContent = (props) => (
  <div className="pageContent">
    <List {...props}/>
  </div>
);

export default PageContent;
