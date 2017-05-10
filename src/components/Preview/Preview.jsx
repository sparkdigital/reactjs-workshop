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
      {props.selectedMovie.Title}
    </div>
  );
}

export default Preview;
