import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div className="input-content">
        <div className="input-form">
          <h1>Select .txt files: </h1>
        </div>

        <div className="input-form">
          <form encType="multipart/form-data" action="/" method="post">
            <input type="file" name="files" multiple />
            <button type="submit" className="btn btn-success">Submit File</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Sidebar;
