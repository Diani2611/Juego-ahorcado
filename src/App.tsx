import { letters } from './helpers/letters'
import { HangImage } from './components/HangImage'
import './App.css'
import { useState } from 'react'

function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState ( false);

  const checkLetter = (letter: string) => {

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }


    const hiddenWordArray = hiddenWord.split(' ');
    


    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;

      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
  }


  return (
    <div className="App">

      <HangImage imageNumber={attempts} />

      <h3>{hiddenWord}</h3>

      <h3>Intento: {attempts}  </h3>

      {
        letters.map((letter) => (
          <button
            onClick={() => checkLetter(letter)}
            key={letter}>
            {letter}</button>
        ))
      }

    </div>
  )
}

export default App
