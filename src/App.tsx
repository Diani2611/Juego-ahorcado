import { letters } from './helpers/letters'
import { HangImage } from './components/HangImage'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttempts] = useState(0);
  const [lose, setLose] = useState ( false);
  const [won, setWon] = useState (false);
  

  useEffect (( )=> {
    if (attempts >= 9) {
      setLose (true);
    }
  }, [attempts]);

  useEffect(()=> {
    const currentHiddenWord = hiddenWord.split('').join('');
    if (currentHiddenWord === word) {
      setWon (true);
    }

  }, [hiddenWord])

  const checkLetter = (letter: string) => {

    if (lose) return;

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

      <h3>Intentos: {attempts}  </h3>

      {
        (lose) 
        ? <h2>Perdió { word }</h2> :''
      }

{
        (won) 
        ? <h2>Felicidades usted gan { word }</h2> :''
      }

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
