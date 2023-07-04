import './App.css';
import {useState} from 'react';

// Der Rückgabewert der Funktion beschreibt die Komponente
const App = () => {

  let [myState, setMyState] = useState(9);
  console.log(myState); // log the value
  console.log(setMyState); // log the update function for myState
  
  return (
    <>
      <h1>Welcome awakened one!</h1>
      <p>Minutes you needed to fall asleep {myState} (number saved in a state)</p>
    </>
  )
}

export default App;
