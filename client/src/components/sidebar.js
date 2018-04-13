import React, { Component } from 'react';
import axios from 'axios';
import './sidebar.css';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {value: ""};

  }

  handleChange = (event) => {
    const data = new FormData();

    data.append('file', event.target.files);

    axios.post('http://localhost:5000/', data).then((response) => {
      console.log("Response:", response.data.foob);
    });
  }

  //this is experimental ATM
  uploadDocument = (file, name) => {
    console.log("inside uploadDocument")
    let data = new FormData();

    data.append('file', "foob");
    data.append('name', "arrgh");

    console.log("upload data: ", data)

    return (dispatch) => {
      axios.post('/', data)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    };
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
          </form>

        </div>
      </div>
    )
  }
}

export default Sidebar;
