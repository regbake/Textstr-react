import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import Header from './components/header';
import InputOutputWrap from './components/input-output-wrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>

        <InputOutputWrap></InputOutputWrap>
      </div>
    );
  }
}

export default App;
