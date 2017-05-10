import React from 'react';



const ListItem = ({movie}) => {
  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={movie.Poster}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{movie.Title}</div>
        </div>
      </div>
    </li>
  );
}


export default ListItem;
