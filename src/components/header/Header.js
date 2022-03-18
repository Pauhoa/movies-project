import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="p-3 navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Movee'z
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Favoris
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
