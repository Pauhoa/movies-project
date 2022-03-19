import React, { Component } from "react";
import MovieElement from "./MovieElement/MovieElement";
import Style from "./MovieList.module.scss";

export default class MovieList extends Component {
  render() {
    return (
      <div className={ "w-75 d-flex flex-row flex-wrap align-content-start " + Style.container }>
        {this.props.movies.map((m, index) => (
          <MovieElement key={m.title + index} movie={ m } updateSelectedMovie={() => this.props.updateSelectedMovie(index)} />
        ))}
      </div>
    );
  }
}
