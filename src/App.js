import React, { Component } from "react";
import { Header, MovieList, MovieDetails, Loading } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
    };

    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "The Godfather",
            img: "https://gticket.quai10.be/image.aspx?img=movies_photo/30341/godfather.jpg",
            details: "Policier, Drama",
            description:
              ' En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone, "parrain" de cette famille, marie sa fille à un bookmaker. Sollozzo, " parrain " de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse...',
          },
          {
            title: "Captain Fantastic",
            img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6YFpWi6v8WvU3MCP0NE9aSDmPs1aJG-HwusLIf-n0IEAhFCYo",
            details: "Comédie dramatique",
            description:
              "Ben Cash, sa femme Leslie et leurs six enfants habitent dans une région sauvage de l'état de Washington. Isolés de la société, Ben et Leslie consacrent tous leurs efforts à leurs enfant",
          },
          {
            title: "Five",
            img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcLBua82EcEM_l21xxkzgKaOqmeZiZY2q-p9LeYBsRqi1TRAnJ",
            details: "Comédie",
            description:
              "Cinq amis d'enfance rêvent depuis toujours d'habiter en colocation. Quand l'occasion d'emménager ensemble se présente, Julia, Vadim, Nestor et Timothée n'hésitent pas une seule seconde -- ",
          },
          {
            title: "Coach Carter",
            img: "https://m.media-amazon.com/images/I/51x3rhXxG4L._AC_.jpg",
            details: "Comédie dramatique, Biopic, Drame",
            description:
              "L'histoire vraie de Ken Carter, l'entraîneur de basket d'une équipe de lycée, qui devint célèbre en 1999 après avoir renvoyé ses joueurs à leurs chères études, déclarant forfait deux matchs de suite alors que l'équipe était invaincue, parce que ces derniers n'avaient pas obtenu des résultats scolaires suffisants.",
          },
        ],
        loaded: true,
      });
    }, 2000);
  }

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index,
    });
  };

  render() {
    return (
      <div className="App bg-secondary d-flex flex-column">
        <Header />
        {this.state.loaded ? (
          <div className="d-flex flex-row flex-fill">
            <MovieList
              movies={this.state.movies}
              updateSelectedMovie={this.updateSelectedMovie}
            />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
