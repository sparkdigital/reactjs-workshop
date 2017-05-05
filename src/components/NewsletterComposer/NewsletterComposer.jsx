import React from 'react';

// Components.
import { Panel } from 'react-bootstrap';
import DragAndDropArea from '../DragAndDropArea/DragAndDropArea';
import Header from '../Header/Header';
import TitleField from '../TitleField/TitleField';

const NewsletterComposer = ({ title, actions }) => {
  
  const h3 = (
    <h3>Newsletter composition:</h3>
  );

  return (
    <Panel
      className="newsletterComposer"
      header={h3}
    >
      <TitleField
        onChange={actions.updateTitle}
        title={title}
      />
      <Header />
      <DragAndDropArea />
    </Panel>
  );
} 

export default NewsletterComposer;
