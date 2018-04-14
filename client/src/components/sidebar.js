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
    const files = [];
    const test = new FormData();

    test.append("name", "haha")

    if (event.target.files){
        console.log("files are present");

        if (event.target.files.length === 1) {
            //one file
            data.append("file", event.target.files[0]);

            console.log("only one file");
        } else {
            //more than one file
            console.log("more than one file");

            for (let single of event.target.files) {
                files.push(single);
                
            }

            data.append("file", files)
            console.log("fileList: ", files)
        }
    }


    console.log("DATA: ", data)

    axios.post('http://localhost:5000/', data)
      .then((response) => {
        // console.log("Response:", response.data.foob);
        // console.log("fileNameArray:", response.data.fileNameArray);
        // console.log("timeData:", response.data.timeData);
        // console.log("cleanArray:", response.data.cleanArray);
      })
      .catch((err) =>{
        console.log("err: ", err)
      });
  }

  //this is experimental ATM
  uploadDocument = (event) => {

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
