import React, { Component } from 'react'
import loading from "./loading.gif";
import "./Spinner.css"

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <img src={loading} alt="" />
      </div>
    )
  }
}
