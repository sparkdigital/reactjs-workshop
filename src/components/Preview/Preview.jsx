import React from 'react';

const Preview = ({ imgUrl = '' }) => {
  
  const styles = {
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  };
  
  return (
    <div className="preview" style={styles}></div>
  );
}

export default Preview;
