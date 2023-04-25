import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    return (
    <>

      <div className='itemContainer'>

            <div className="itemSub1">
              <img src={this.props.imageUrl} alt="" />
            </div>
            <div className="itemSub2">
             <h2> {this.props.title}... </h2>
              {this.props.description}...
            </div>
            <a href={this.props.readMoreUrl} target="_blank" className="readBtn">Read More..</a>
        
      </div>

    </>
    )
  }
}
