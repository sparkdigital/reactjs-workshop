import { connect } from 'react-redux';
import React, { Component } from 'react';

// Actions.
import { updateTitle } from '../../actions';

// Components.
import PageContent from '../../components/PageContent/PageContent';

class App extends Component {
  render() {
    return (
      <PageContent
        {...this.props}
      />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
