import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Components:

import Home from './HomeClass '
import Projekte from './ProjekteClass' // projekte
import Leben from './LebenClass'   // leben


var mainStyles = {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  maxHeigth: '80%',
}


const Main = () => (
  <main style = { mainStyles }>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/projekte' component={Projekte}/>
      <Route path='/leben' component={Leben}/>
    </Switch>
  </main>
)

export default Main
