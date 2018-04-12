import React, { Component } from 'react';
import './input-output-wrap.css';
import Sidebar from './sidebar';

class InputOutputWrap extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div idName="input-output-wrap">
        <Sidebar></Sidebar>
      </div>
    )
  }
}

export default InputOutputWrap;
