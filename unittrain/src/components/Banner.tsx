import React from 'react'
import {  Link } from 'react-router-dom';
import "./Banner.css"

export default function Banner() {
  return (
    <div className='banner'>
      <div>
      <h3>Just fill in the boxes below</h3>
      </div>
      <Link to="/"><h4>Hide</h4></Link>

    </div>
  )
}
