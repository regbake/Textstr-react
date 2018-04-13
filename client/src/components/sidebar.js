import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {value: ""};

  }

  handleChange = (event) => {
    //looks like value is set as a default thing
    this.setState({value: event.target.value});

    console.log(event.target.value);
  }

  handleSubmit = (e) => {
    console.log("submitted val", this.state.value)

    e.preventDefault();
  }

  render() {
    return(
      <div className="input-content">
        <div className="input-form">
          <h1>Select .txt files: </h1>
        </div>

        <div className="input-form">

          <form onSubmit={this.handleSubmit}>
            <input type="file" name="files" onChange={this.handleChange} multiple/>
            <input type="submit" value="Submit" />
          </form>

          // <form encType="multipart/form-data" action="/" method="post">
          //   <input type="file" name="files" multiple />
          //   <button type="submit" className="btn btn-success">Submit File</button>
          // </form>

        </div>
      </div>
    )
  }
}

export default Sidebar;
