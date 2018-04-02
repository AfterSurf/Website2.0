import React from 'react'
import projekteImage from './bilder/projekte.jpg';
import styles from './styles/styles.css';

export default class Projekte extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>

          <div className={styles.rowStyles}>
            <div className = {styles.centerStyles}>
              <img className = { styles.styleProjekteImage } src={projekteImage} />
              <h1 className = { styles.projekteStyle }> Projekte </h1>
            </div>
          </div>

      </div>
    )
  }
}
