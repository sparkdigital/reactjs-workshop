import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components.
import { Panel } from 'react-bootstrap';
import Loading from '../Loading/Loading';

class List extends Component {
  componentDidMount() {
    this.props.actions.fetchMovies();
  }
  
  render() {
    const h3 = (
      <h3>Movies List</h3>
    );

    return (
      <Panel
        header={h3}
        className="preview"
      >
        <ul className="preview-content">
          <Link to="/edit/1">edit 1</Link>
        </ul>
      </Panel>
    );
  }
}

export default List;
