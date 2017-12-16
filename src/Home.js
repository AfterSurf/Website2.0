import React from 'react'
import homeImage from './bilder/homeAngepasst.jpg';


var styleHomeImage  = {
  margin: 'auto',
  height: 400,
  width: '100',
}

var centerStyles = {
  alignItems: 'center',
  maxWidth: 500,
}

var divStyles = {
  alignItems: 'center',
}

const Home = () => (
  <div style = {centerStyles}>
    <h1>Welcome to the HOME Website!</h1>

    <img style = { styleHomeImage } src={homeImage} />

  </div>
)

export default Home
