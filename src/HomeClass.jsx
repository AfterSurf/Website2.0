import React from 'react'
import styles from './styles/styles.css';
import homeImage from './bilder/homeAngepasst.jpg';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className = {styles.centerStyles}>
        <h1>Welcome to the HOME Website!</h1>
        <img className={styles.styleHomeImage} src={homeImage} />
      </div>
    )
  }
}
