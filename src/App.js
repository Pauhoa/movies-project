import React, { Component } from "react";
import { Header, MovieList, MovieDetails } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "The Godfather",
          img: "https://gticket.quai10.be/image.aspx?img=movies_photo/30341/godfather.jpg",
          details: "R | 175 min | Crime, Drama",
          description:
            ' En 1945, à New York, les Corleone sont une des cinq familles de la mafia. ... Coppola hausse sa peinture de "The Godfather" aux dimensions d\'une ...',
        },
        {
          title: "Captain Fantastic",
          img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6YFpWi6v8WvU3MCP0NE9aSDmPs1aJG-HwusLIf-n0IEAhFCYo",
          details: "Viggo Mortensen",
          description:
            "Ben Cash, sa femme Leslie et leurs six enfants habitent dans une région sauvage de l'état de Washington. Isolés de la société, Ben et Leslie consacrent tous leurs efforts à leurs enfant",
        },
        {
          title: "Film 3",
          img: "image3",
          details: "Details 3",
          description: "Description 3",
        },
        {
          title: "Film 4",
          img: "image4",
          details: "Details 4",
          description: "Description 4",
        },
      ],
      selectedMovie: 0,
    };
  }

  updateSelectedMovie = (title) => {
    const index = this.state.movies.findIndex( (m) => {
      return title === m.title;
    })

    this.setState({
      selectedMovie: index
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill">
          <MovieList movies={this.state.movies} updateSelectedMovie={ this.updateSelectedMovie}/>
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }
}

export default App;
