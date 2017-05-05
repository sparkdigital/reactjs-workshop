import React from 'react';

// Components.
import { Button } from 'react-bootstrap';

const ComponentButton = (props) => {

  return (
    <Button>
      {props.children}
    </Button>
  );
}

export default ComponentButton;
