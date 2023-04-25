import './Components/CssFiles/Navbar.css';
import './Components/CssFiles/NewsItems.css';
import './Components/CssFiles/NewsContainer.css';
import './Components/CssFiles/ItemModal.css';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/JsFiles/Navbar';
import News from './Components/JsFiles/News';
import ItemModal from './Components/JsFiles/ItemModal';

export default class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <Navbar  />
        
            <News apiKey="7b8d4466699e4edfbeac462aa9b7145e"/>
      
        {/* <ItemModal/> */}
      </div>
    )
  }
}


