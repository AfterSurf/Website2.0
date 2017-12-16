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
}


const Header = () => (
  <header>
  <div >
      <nav>
        <ul style = { headerStyle }>
          <Link to='/'>Home</Link>
          <Link to='/projekte'>Projekte</Link>
          <Link to='/leben'>Leben</Link>
        </ul>
      </nav>
</div>

  </header>
)

export default Header
