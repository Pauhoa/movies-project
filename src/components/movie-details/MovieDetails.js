import React, { Component } from "react";

export default class movieDetails extends Component {
  render() {
    return (
      <div className="bg-light w-25 p-4 d-flex flex-column">
        <h5>{this.props.movie.title}</h5>
        <hr className="w-100" />
        <div>
          <img
            className="d-block mx-auto w-75"
            src={this.props.movie.img}
            alt=""
          />
        </div>
        <hr className="w-100" />
        <span className="text-secondary">{this.props.movie.details}</span>
        <span>{this.props.movie.description}</span>
      </div>
    );
  }
}
