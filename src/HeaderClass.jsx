import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/styles.css';


export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <div >
          <nav>
            <ul className = { styles.headerStyle }>
              <Link to='/' className = { styles.homeStyle }>HomeA</Link>
              <Link to='/projekte' className = { styles.projekteStyle } >ProjekteA</Link>
              <Link to='/leben' className = { styles.lebenStyle } >LebenA</Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
} // end class
