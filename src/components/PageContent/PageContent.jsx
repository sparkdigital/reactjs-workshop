import React from 'react';

// Components.
import TitleField from '../TitleField/TitleField';

const PageContent = (props) => (
  <div className="pageContent">
    <TitleField onChange={props.actions.updateTitle} searchMovies={props.actions.fetchMovies} title={props.title}/>
  </div>
);

export default PageContent;
