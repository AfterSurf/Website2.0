import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/styles.css';
import style from  './styles/headerStyles.css';


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
              <Link to='/' className = {style.homeStyle}>Home</Link>
              <Link to='/projekte' className = {style.projekteStyle}>Projekte</Link>
              <Link to='/leben' className = {style.lebenStyle}>Leben</Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
} // end class
