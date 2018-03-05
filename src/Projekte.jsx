import React from 'react'
import projekteImage from './bilder/projekte.jpg';

// var styleProjekteImage = {
// flex: 1,
// justifyContent: 'center',
// height: 200,
// padding: 45,
//
//   }

var styleProjekteImage = {
  flex: 1,
  alignSelf: 'stretch',
  width: null,
  maxWidth: '100%',
}

var projekteStyle = {
  color: '#64C7DC',
  fontFamily: 'Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif',
  fontSize: 32,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 500,

   textShadow: '0.05em 0.02em rgb(83, 120, 168)',
}


// row- und centerStyles
var rowStyles = {
  alignItems: 'center',
    display: 'flex', justifyContent: 'center',
  flexDirection: 'row',
}

var centerStyles = {
alignItems: 'center',
 display: 'flex', justifyContent: 'center',
flexDirection: 'column',
 maxWidth: 400,
 maxHeigth: 80,

}


const Projekte = () => (
  <div>

      <div style={rowStyles}>
        <div style = {centerStyles}>
          <img style = { styleProjekteImage } src={projekteImage} />
          <h1 style = { projekteStyle }> Projekte </h1>

        </div>
      </div>

  </div>
)

export default Projekte
