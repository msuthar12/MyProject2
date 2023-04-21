import React, { Component } from 'react'


export class Navbar extends Component {

  render() {
    return (
      <>

        <div className="navContainer">
            <div className="navMenu">
                <ul>
                    <li><a href='/'>KhabriLal</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>
            </div>
        </div>
      
      </>
    )
  }
}

export default Navbar
