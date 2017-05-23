import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock, Panel } from 'react-bootstrap';

// Store.
import store from '../../store';

const TitleField = ({ onChange = () => {}, searchMovies = () => {}, title = '' }) => {

  const handleChange = event => {
    onChange(event.target.value);
  }

  return (
    <FormGroup
      controlId="formBasicText"
    >
      <ControlLabel>Title</ControlLabel>
      <FormControl
        type="text"
        value={title}
        placeholder="Enter text"
        onChange={handleChange}
      />
      <FormControl.Feedback />
      <HelpBlock>
        English movie title
      </HelpBlock>
      <button onClick={searchMovies}>Search Movies</button>
    </FormGroup>
  );
}

export default TitleField;
