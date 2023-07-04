import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  return (
    <>
      <Pagetitle content='News of the morning' />
      <Inhalte />
    </>
  )
}

// Komponente, die das Laden eines Arrays voller Texte simuliert
const Inhalte = () => {
  let [inhalte, setInhalte] = useState([]); // State für die Inhalte is empty at first

  // Dieser Effect-Hook sol beim Einbinden der Komponente einmal gefeuert werden.
  useEffect(() => {
    // Array mit Texten anlegen
    // Hier kann genauso gut ein Ajax-Aufruf oder ähnliches stehen
    const fallAsleepTips = [
      "Pillow Paradise: Transform your bed into a fluffy wonderland by stacking pillows of various sizes and textures. It's like a pillow buffet, and you'll sleep with a smile on your face... if you can find your way out!",
      "Sock Opera: Slip on a pair of cozy socks before bed and give your feet a hilarious puppet show. It's scientifically proven that bedtime laughter increases the chances of dozing off into dreamland. Just make sure your socks don't steal the spotlight!",
      "Silly Sounds: Embrace your inner maestro and create a symphony of silly sounds while lying in bed. Whether it's quacking like a duck or humming your favorite cartoon theme song, you'll drift off to sleep wondering what your dreams will sound like.",
      "Blanket Burrito: Take bedtime comfort to the next level by rolling yourself up in your blankets like a snug burrito. You'll feel like the comfiest superhero saving the world from boring dreams. Warning: Avoid extra salsa, or you might get too spicy for sleep!",
      "Pajama Party: Throw a mini pajama party for yourself every night. Put on your wackiest pajamas, complete with mismatched socks and a ridiculous hat. It's impossible to take yourself seriously when you're dressed like a cartoon character, making sleep the funniest event of the day!"
    ];

    // Neues Array in den State schreiben
    setInhalte(fallAsleepTips)
  }, []) // die [] sorgt dafür, dass dieser Effekt nur einmal aufgerufen wird

  // Funktion, die aus dem Text-Array ein Komponenten-Array macht
  const createContents = () => inhalte.map((inhalt, index) => <ParagraphWithCharacterCounter content={inhalt} key={`inhalt${index}`} />);

  return (
    <>
      <Ueberschrift content="Tips to fall asleep faster" />
      {createContents()}
    </>
  )
}


  // Es dürfen keine HTML-Tagnamen als Komponenten verwendet werden.
  const Ueberschrift = props => <h3>{props.content}</h3>

  const Pagetitle = props => <h1>{props.content}</h1>

  const ParagraphWithCharacterCounter = props => {
    return (
      <div className="container">
        {props.content}
        <p className="count">The previous text contains <strong>{String(props.content).length}</strong> characters.</p>
      </div>
    )
  }

  export default App;
