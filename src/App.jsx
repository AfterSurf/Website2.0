// App ist quasi mein Container

import React, { Component } from 'react';
// import './App.css';    // --> erstmal weg damit

import Header from './Header'
import Main from './MainClass'

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
