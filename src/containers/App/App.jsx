import React, { Component } from 'react';

// Components.
import PageContent from '../../components/PageContent/PageContent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {
          imdbId: "tt0111161",
          Title: "The Shawshank Redemption",
          Year: 1994,
          Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
        },
        {
          imdbId: "tt0068646",
          Title: "The Godfather",
          Year: 1972,
          Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        },
        {
          imdbId: "tt0320671",
          Title: "The Dark Knight",
          Year: 2008,
          Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAyNzMyNDMtYWJjZi00MDEwLThkYWEtYTNlNGUzZDFkYjUyXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg",
        }
      ],
      selectedMovie: null
    };
  }

  render() {
    return (
      <PageContent
        movies={this.state.movies}
        onSelectMovie={ (selectedMovie) => this.setState(prevState => ({selectedMovie: selectedMovie, movies: prevState.movies}))}
        selectedMovie={this.state.selectedMovie}
      />
    );
  }
}

export default App;
