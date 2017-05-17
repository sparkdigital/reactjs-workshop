import React from 'react';

// Components.
import List from '../List/List';
import Preview from '../Preview/Preview';

const PageContent = (props) => {
  console.log('MOVIE poster', props.activeMovieIndex);
  return (
    <div className="pageContent">
      <h1>My Awesome Movies App</h1>
      <div className="pageContent-main">
        <Preview imgUrl={props.movies[props.activeMovieIndex].Poster}/>
        <List {...props}/>
      </div>
    </div>
  );
}

export default PageContent;
