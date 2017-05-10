import React from 'react';

// Components.
import List from '../List/List';
import Preview from '../Preview/Preview';

const PageContent = (props) => (
  <div className="pageContent">
    <h1>My Awesome Movies App</h1>
    <div className="pageContent-main">

        <Preview selectedMovie={props.selectedMovie}/>
        <List {...props}/>
    </div>
  </div>
);

export default PageContent;
