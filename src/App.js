import './App.css';
import { useState } from 'react';

// Der Rückgabewert der Funktion beschreibt die Komponente
const App = () => {

  let [myState, setMyState] = useState(9);
  console.log(myState); // log the value
  console.log(setMyState); // log the update function for myState

  const decrement = () => {
    setMyState(--myState);
  }

  return (
    <>
      <Pagetitle content='News of the morning' />
      <Ueberschrift content='Welcome awakened one!' />
      <Paragraph content={`Minutes you needed to fall asleep ${myState} (number saved in a state)`} />
      <button onClick={decrement}>
        Fall asleep a little faster!
      </button>
      <ParagraphWithCharacterCounter content={`Try to count all the lovely sheep.`} />
    </>
  )
}

// Es dürfen keine HTML-Tagnamen als Komponenten verwednet werden
const Ueberschrift = props => <h3>{props.content}</h3>

const Pagetitle = props => <h1>{props.content}</h1>

// Komponenten sind Funktionen mit Rückgabewert
const Paragraph = props => {
  return (
    <div className="container">
      {props.content}
    </div>
  )
}

const ParagraphWithCharacterCounter = props => {
  return (
    <div className="container">
      {props.content}
      <p className="count">The previous paragraph text contains {String(props.content).length} characters.</p>
    </div>
  )
}


export default App;
