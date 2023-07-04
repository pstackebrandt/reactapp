import './App.css';

// Der Rückgabewert der Funktion beschreibt die Komponente
const App = () => {

  // Innerhalb der Komponenten können beliebige Funktionen angelegt werden
  const detectDreamers = (min, max) => ~~(Math.random() * (max - min + 1) + min);

  return (
    <>
      <h1>Welcome!</h1>
      <p>So many people have dreamed of you tonight:<br/> {~~(Math.random() * 100)} (number from Expression)</p>
      <p>{detectDreamers(0, 100)} (number from function )</p>
    </>
  )
}

export default App;
