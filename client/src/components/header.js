import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="header-inner">
          <h1 className="logo"><a href="/">Under the writing hood</a></h1>
        </div>
      </div>
    );
  }
}

export default Header;
