import React, { Component } from 'react';
import axios from 'axios';
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
    e.preventDefault();

    console.log("submitted val:", this.state.value);

    axios.post("http://localhost:5000/", {
      files: "howdy"
    })
      .then(response => console.log(response))
      .catch(error => console.log("something fcked up", error))

      console.log("fcking test bitches")
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

        </div>
      </div>
    )
  }
}

export default Sidebar;
