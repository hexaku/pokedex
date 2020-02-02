import React, { Component, Fragment } from 'react';
import styled from 'styled-components';


export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav 
          className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" 
        >
          <a 
            className="navbar-brand col-sm-5 col-md-2 mr-0 align-items-center"
            href="#"
          >
            Pokedex
          </a>
        </nav>
      </Fragment>
    )
  }
}
