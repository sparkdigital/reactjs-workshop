import React from 'react';

// Components.
import MovieField from '../TitleField/TitleField';
import List from '../List/List';

const PageContent = (props) => { 
  var actions = {
    title: props.actions.updateTitle,
    synopsis: props.actions.updateSynopsis
  };
  const mutator = function (property, value) {
    var action = actions[property](value);
  }
  return (
    <div className="pageContent">
      <MovieField onPropertyChange={mutator} movie={props.movie} />
      Title: {props.movie.title} <br />
      Synopsis: {props.movie.synopsis}
    </div>
  );
}

export default PageContent;
