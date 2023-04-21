import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  render() {
    return (
    
    <>
      <div >
        <div className='newsHeading'>
        <h2>KhabriLal Ki Khabre</h2>
        </div>
        <div className='newsContainer'>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        </div>
      </div>

    </>
    )
  }
}
