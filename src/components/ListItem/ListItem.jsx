import React from 'react';



const ListItem = (props) => {
  return(
    <li className="list-group-item list-group-item-custom" onClick={() => props.onSelectMovie(props.movie)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={props.movie.Poster}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{props.movie.Title}</div>
        </div>
      </div>
    </li>
  );
}


export default ListItem;
