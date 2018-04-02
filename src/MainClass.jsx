import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './styles/styles.css';

// Components:
import Home from './HomeClass';
import Projekte from './ProjekteClass'; // projekte
import Leben from './LebenClass';   // leben



export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className = { styles.mainStyles }>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/projekte' component={Projekte}/>
          <Route path='/leben' component={Leben}/>
        </Switch>
      </main>
    );
  }
}
