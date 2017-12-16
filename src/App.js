// App ist quasi mein Container

import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;