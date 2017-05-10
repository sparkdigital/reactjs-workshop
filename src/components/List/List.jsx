import React from 'react';

// Components.
import { Panel } from 'react-bootstrap';
import ListItem from '../ListItem/ListItem';
const List = (props) => {

  const h3 = (
    <h3>Movies List</h3>
  );

  const movies = props.movies.map( (movie) =>{
    return <ListItem key={movie.imdbId} movie={movie}/>
  });

  return (
      <ul className="col-md-6 list-group">
        {movies}
      </ul>
  );
}

export default List;
