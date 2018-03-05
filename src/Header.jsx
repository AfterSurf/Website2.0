import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.


var headerStyle = {
  display: 'flex',
  flex: 1,
  alignItems: 'stretch',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingTop: 20,
  paddinLeft: 40,
  paddinRight: 40,
}

var homeStyle = {
  color: '#9BBC29',
}

var projekteStyle = {
  color: '#E79A46',
}

var lebenStyle = {
  color: '#64C7DC',
}


const Header = () => (
  <header>
    <div >
      <nav>
        <ul style = { headerStyle }>
          <Link to='/' style = { homeStyle }>Home</Link>
          <Link to='/projekte' style = { projekteStyle } >Projekte</Link>
          <Link to='/leben' style = { lebenStyle } >Leben</Link>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
