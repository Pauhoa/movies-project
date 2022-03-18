import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
      <div className="w-25 p-2">
        <div className="card">
          <img
            alt="affiche de gladiator"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6YFpWi6v8WvU3MCP0NE9aSDmPs1aJG-HwusLIf-n0IEAhFCYo"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Captain Fantastic</h5>
            <p className="card-text">
              Ben Cash, sa femme Leslie et leurs six enfants habitent dans une
              région sauvage de l'état de Washington. Isolés de la société, Ben
              et Leslie consacrent tous leurs efforts à leurs enfants -- voulant
              qu'ils réfléchissent décisivement, qu'ils soient athlétiques et en
              bonne forme, et qu'ils arrivent à naviguer dans la nature sans
              technologie. Quand Leslie meurt soudainement, Ben doit amener ses
              enfants protégés au monde extérieur pour la première fois.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
