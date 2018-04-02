
import React from 'react';
import lebenImage from './bilder/leben.jpg';


var styleLebenImage = {
flex: 1,
alignSelf: 'stretch',
width: null,

maxWidth: '100%',
};

 // probe 23.12. --> läuft!
 var rowStyles = {
   alignItems: 'center',
     display: 'flex', justifyContent: 'center',
   flexDirection: 'row',
 };

var centerStyles = {
alignItems: 'center',
  display: 'flex', justifyContent: 'center',
flexDirection: 'column',
  maxWidth: 400,
  maxHeigth: 80,
};

var textStyles = {
fontFamily: 'Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif',
fontSize: 22,
fontStyle: 'normal',
fontVariant: 'normal',
fontWeight: 500,
// lineHeight: 26.4,

  // Padding:
  paddingLeft: 5,
  paddingRight: 5,
};

var lebenStyle = {
  color: '#64C7DC',
  fontFamily: 'Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif',
  fontSize: 32,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 500,

   textShadow: '0.05em 0.02em rgb(83, 120, 168)',
  // lineHeight: 26.4,
};

var websiteText = 'Tobias Rösch lebt in Berlin. Aufgewachsen in der Nähe von Dresden, erlernte er als Kind das Gitarren- und Trompetenspiel. ' +
' In seiner Jugend interessierte er sich für die tiefen Töne und wechselte zum Bass. ' +
' Musikalische Erfahrungen sammelte er im Orchester und vielfältigen Pop- und Jazzbands. Obwohl er auch mit BigBands und Orchestern spielte, legte er sein Hauptaugenmerk auf die Arbeit mit kleineren Ensembles im kammermusikalischen Gewand.' +
' Sein Interesse an szenischer Arbeit brachte ihn zum Theater und Film, wo er bei einigen Produktionen mitwirkte.'+
' Viele Auftritte im In- und Ausland und das Musikstudium an der Universität der Künste in Berlin schulten und erprobten sein musikalisches Können. '+
' Ausflüge führten ihn zum Radio und Film, wo er sich in Sendungen, Artikeln und Beiträgen unter anderem mit der Musikszene seiner Heimatstadt Dresden in den 40ern, 50ern und 60ern des letzten Jahrhunderts auseinandersetze. ';

const Leben = () => (
  <div>
      <div style={rowStyles}>
        <div style = {centerStyles}>
          <img style ={ styleLebenImage } src={lebenImage}/>
          <h1 style = {lebenStyle}>LEBEN</h1>
        </div>
      </div>

      <h2 style = {textStyles}> {websiteText}</h2>
  </div>
)


export default Leben
