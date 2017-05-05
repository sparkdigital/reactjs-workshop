import React from 'react';

// Components.
import { ButtonToolbar, Panel } from 'react-bootstrap';
import ComponentButton from '../ComponentButton/ComponentButton';

const ToolBar = () => {
  
  const h3 = (
    <h3>Components</h3>
  );

  return (
    <Panel header={h3}>
      <ButtonToolbar>
        <ComponentButton>
          Story
        </ComponentButton>
        <ComponentButton>
          Rich Text
        </ComponentButton>
        <ComponentButton>
          Ad
        </ComponentButton>
        <ComponentButton>
          Separator
        </ComponentButton>
      </ButtonToolbar>
    </Panel>
  );
}

export default ToolBar;
