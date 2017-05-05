import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Actions.
import { updateTitle } from '../../actions';

// Components.
import PageContent from '../../components/PageContent/PageContent';

const EditionContainer = ({ match }) => (
  <div>
    <Link to="/">Back</Link>
     - editando {match.params.id} 
  </div>
);

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      updateTitle: (text) => {
        dispatch(updateTitle(text))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditionContainer);
