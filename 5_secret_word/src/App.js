import './App.css';

import {useCallback, useEffect, useState} from "react";

import { wordsList } from './data/words';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]


function App() {
  const guessesQty = 3;

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setguessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setguesses] = useState(guessesQty)
  const [score, setScore] = useState(0)


  const pickWordAndCategory =  useCallback(() => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)];

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();
    // pick word and pick category
    const {word, category} = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.toLowerCase().split("");

    //fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name)
  },[pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if(letters.includes(normalizedLetter)){
      setguessedLetters((actualguessedLetters) => [
        ...actualguessedLetters,
        normalizedLetter
      ]);
    } else {
      setWrongLetters((actualguessedLetters) => [
        ...actualguessedLetters,
        normalizedLetter
      ]);
      setguesses((actualGuesses) => actualGuesses - 1)
    }

  }

  const clearLetterStates = () => {
    setguessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    //win conditions
    if(guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore + 100);
      startGame();
    }
  }, [guessedLetters,letters,startGame])

  const retry = () => {
    setScore(0);
    setguesses(guessesQty);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
        <Game  
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters} 
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
      
    </div>
  );
}

export default App;
