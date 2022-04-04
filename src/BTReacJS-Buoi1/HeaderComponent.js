import React, { Component } from "react";

class HeaderComponent extends Component {
  render() {
    return (
      <div className="header">
        <nav className="container-xl navbar navbar-expand-lg ">
          <a className="navbar-brand" href="#">
              Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar_item"
            aria-controls="navbar_item"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar_item">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
             
            </ul>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default HeaderComponent;
