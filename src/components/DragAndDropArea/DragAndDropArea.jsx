import React from 'react';

const DragAndDropArea = (props) => {

  const renderIconIfEmpty = function () {
    if (! props.children || props.children.length === 0) {
      return (
        <i className="fa fa-plus-circle"></i>
      );
    }
  }

  return (
    <div className="dragAndDropArea">
      {renderIconIfEmpty()}
    </div>
  );
}

export default DragAndDropArea;
