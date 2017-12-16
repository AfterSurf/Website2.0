import React from 'react'
import lebenImage from './bilder/leben.jpg';


var styleLebenImage = {
flex: 1,
alignSelf: 'stretch',
width: null,
maxWidth: '100%',
maxHeigth: 500,

 }

var centerStyles = {
  alignItems: 'center',
  maxWidth: 600,
  maxHeigth: 100,
}

var textStyles = {
}

var websiteText = 'Tobias Rösch lebt in Berlin. Aufgewachsen in der Nähe von Dresden, erlernte er als Kind das Gitarren- und Trompetenspiel. ' +
' In seiner Jugend interessierte er sich für die tiefen Töne und wechselte zum Bass. ' +
' Musikalische Erfahrungen sammelte er im Orchester und vielfältigen Pop- und Jazzbands. Obwohl er auch mit BigBands und Orchestern spielte, legte er sein Hauptaugenmerk auf die Arbeit mit kleineren Ensembles im kammermusikalischen Gewand.' +
' Sein Interesse an szenischer Arbeit brachte ihn zum Theater und Film, wo er bei einigen Produktionen mitwirkte.'+
' Viele Auftritte im In- und Ausland und das Musikstudium an der Universität der Künste in Berlin schulten und erprobten sein musikalisches Können. '+
' Ausflüge führten ihn zum Radio und Film, wo er sich in Sendungen, Artikeln und Beiträgen unter anderem mit der Musikszene seiner Heimatstadt Dresden in den 40ern, 50ern und 60ern des letzten Jahrhunderts auseinandersetze. ';

const Leben = () => (
  <div style = {centerStyles}>
    <img style = { styleLebenImage } src={lebenImage} />
    <h1>Welcome to the LEBEN Website!</h1>
    <h2 style = {textStyles}> {websiteText}</h2>
  </div>
)

export default Leben
