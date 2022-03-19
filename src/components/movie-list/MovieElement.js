import React, { Component } from "react";

export default class MovieElement extends Component {
  
  mouseEnter = () => {
      this.props.updateSelectedMovie(this.props.movie.title);
  }
  
  
  render() {
    
    return (
      <div onMouseEnter={ this.mouseEnter } className="p-2 w-50">
        <div className="border d-flex bg-light">
          <img
            width="240"
            height="320"
            alt={"Affiche de " + this.props.movie.title}
            src={this.props.movie.img}
          />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{this.props.movie.title}</h5>
            <hr className="w-100" />
            <span>{this.props.movie.details}</span>
          </div>
        </div>
      </div>
    );
  }
}
