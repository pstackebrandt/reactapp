import './App.css';

// Diese Funktion muss Groß geschrieben werden
// Der Rückgabewert der Funktion beschreibt die Komponente
const App = () => {
  // Es wird JSX-Code zurückgegeben.
  // Das ist eine an HTML angelehnte Templatesprache
  // Das Fragment <></> ist eine logische Zusammenfassung, die nicht auf der Webseite benutzt wird
  return (
    <>
      <h1>Peters Website</h1>
      <p>Good morning friend!</p>
    </>
  )
}

export default App;
