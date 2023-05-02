import React, { Component } from 'react'


export class Navbar extends Component {

  render() {
    return (
      <>

        <div className="navContainer">
            <div className="navMenu">
                <ul>
                    <li><a href='/'>NewsWorld</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>
            </div>
            <div className="newsTypes">
              <ul>
                <li><button  id='typeBtn1' className='newsTypesBtn' onClick={this.props.handleNews} >Techonology</button></li>
                <li><button  id='typeBtn2' className='newsTypesBtn' onClick={this.props.handleNews}>Sports</button></li>
                <li><button  id='typeBtn3' className='newsTypesBtn' onClick={this.props.handleNews}>Politics</button></li>
                <li><button  id='typeBtn4' className='newsTypesBtn' onClick={this.props.handleNews}>Business</button></li>
              </ul>
            </div>
            
        </div>
      
      </>
    )
  }
}

export default Navbar
