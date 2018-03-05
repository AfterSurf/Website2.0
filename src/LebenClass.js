import React from 'react';
import lebenImage from './bilder/leben.jpg';
import styles from './styles/styles.css';

export default class Leben extends React.Component {
    constructor(props) {
      super(props);
    };

    render(){

    let websiteText = 'Tobias Rösch lebt in Berlin. Aufgewachsen in der Nähe von Dresden, erlernte er als Kind das Gitarren- und Trompetenspiel. ' +
    ' In seiner Jugend interessierte er sich für die tiefen Töne und wechselte zum Bass. ' +
    ' Musikalische Erfahrungen sammelte er im Orchester und vielfältigen Pop- und Jazzbands. Obwohl er auch mit BigBands und Orchestern spielte, legte er sein Hauptaugenmerk auf die Arbeit mit kleineren Ensembles im kammermusikalischen Gewand.' +
    ' Sein Interesse an szenischer Arbeit brachte ihn zum Theater und Film, wo er bei einigen Produktionen mitwirkte.'+
    ' Viele Auftritte im In- und Ausland und das Musikstudium an der Universität der Künste in Berlin schulten und erprobten sein musikalisches Können. '+
    ' Ausflüge führten ihn zum Radio und Film, wo er sich in Sendungen, Artikeln und Beiträgen unter anderem mit der Musikszene seiner Heimatstadt Dresden in den 40ern, 50ern und 60ern des letzten Jahrhunderts auseinandersetze. ';


      return(
        <div>

            <div className= {styles.rowStyles}>
              <div className= {styles.centerStyles}>
                <img className= { styles.styleLebenImage } src={lebenImage} />
                <h1 className= {styles.lebenStyle}>LEBEN</h1>
              </div>
            </div>
            <h2 className = {styles.textStyles}> {websiteText}</h2>

        </div>
      )

    } //endREnder

} // endClass
