import React from 'react';

// Components.
import { Panel } from 'react-bootstrap';
import ListItem from '../ListItem/ListItem';

const List = ({ actions, movies }) => {

  const h3 = (
    <h3>Movies List</h3>
  );
  
  const moviesList = movies.map((movie) => {
    return (
      <li key={movie.imdbId}>{movie.Title} ({movie.Year})</li>
    )
  });
  
  // const moviesList = movies.map((movie, index) => (
  //   <ListItem 
  //     {...movie}
  //     id={index}
  //     key={movie.imdbId}
  //     updateActiveMovieIndex={actions.updateActiveMovieIndex}
  //   />
  // ));

  return (
    <Panel
      header={h3}
      className="list"
    >
      <ul className="list-content">
        {moviesList}
      </ul>
    </Panel>
  );
}

export default List;
