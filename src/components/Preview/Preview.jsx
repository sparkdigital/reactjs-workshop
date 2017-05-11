import React from 'react';

const Preview = (props) => {
  if (!props.selectedMovie){
    return (
      <div className="preview">
        Loading...
      </div>
    );
  }
  return(
    <div className="preview">
      <div><img src={props.selectedMovie.Poster}/></div>
      <div>{props.selectedMovie.Title}</div>
    </div>
  );
}

export default Preview;
