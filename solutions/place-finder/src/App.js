import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/containers/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Place Finder</h1>
        </header>
(// https://codepen.io/huange/pen/rbqsD)
        <Search />
      </div>
    );
  }
}

export default App;
