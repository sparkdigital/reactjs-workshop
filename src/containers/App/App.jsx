import { connect } from 'react-redux';
import React, { Component } from 'react';

// Actions.
import { fetchMovies, updateTitle } from '../../actions';

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
      },
      
      fetchMovies: () => {
        dispatch(fetchMovies())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
