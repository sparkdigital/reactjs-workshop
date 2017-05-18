import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock, Panel } from 'react-bootstrap';

// Store.
import store from '../../store';

const MovieField = ({ onPropertyChange = () => {}, movie = {title: '', synopsis: ''} }) => {

  const handleChange = event => {
    onPropertyChange(event.target.name, event.target.value);
  }

  return (
    <FormGroup
      controlId="formBasicText"
    >
      <ControlLabel>Title</ControlLabel>
      <FormControl
        type="text"
        name="title"
        value={movie.title}
        placeholder="Enter text"
        onChange={handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock>
        English movie title
      </HelpBlock>
      <ControlLabel>Synopsis</ControlLabel>
      <FormControl
        type="textarea"
        name="synopsis"
        value={movie.synopsis}
        placeholder="Enter text"
        onChange={handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock>
        Movie description
      </HelpBlock>
    </FormGroup>
  );
} 

export default MovieField;
