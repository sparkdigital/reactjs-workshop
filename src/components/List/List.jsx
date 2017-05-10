import React from 'react';

// Components.
import { Panel } from 'react-bootstrap';
import Loading from '../Loading/Loading';

const List = (props) => {

  const h3 = (
    <h3>Movies List</h3>
  );

  return (
    <Panel
      header={h3}
      className="preview"
    >
      <ul className="preview-content">
      
      </ul>
    </Panel>
  );
}

export default List;
