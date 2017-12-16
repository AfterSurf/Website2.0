import React from 'react'
import projekteImage from './bilder/projekte.jpg';

var styleProjekteImage = {
flex: 1,
justifyContent: 'center',
height: 200,
padding: 45,

  }


const Projekte = () => (
  <div>
    <h1>Welcome to the PROJEKTE Website!</h1>
    <img style = { styleProjekteImage } src={projekteImage} />
  </div>
)

export default Projekte
