import './Components/CssFiles/Navbar.css';
import './Components/CssFiles/NewsItems.css';
import './Components/CssFiles/NewsContainer.css';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/JsFiles/Navbar';
import News from './Components/JsFiles/News';

export default class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <Navbar />
        <News/>
      </div>
    )
  }
}


