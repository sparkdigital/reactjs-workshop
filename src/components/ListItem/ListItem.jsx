import React from 'react';

const ListItem = ({ id, imdbId, Title, Year, updateActiveMovieIndex }) => {
  
  const handleClick = () => {
    updateActiveMovieIndex(id);
  }
  
  return (
    <li onClick={handleClick}>{Title} ({Year})</li>
  );
}

export default ListItem;
