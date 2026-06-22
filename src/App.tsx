import { useState , useEffect} from 'react'
import './index.css' 
import words from './assets/words.json'
import HangmanDrawing from './components/HangmanDrawing';
import Hangmanword from './components/Hangmanword';
import GameKeyboard from './components/GameKeyboard';

function App() {

  const[word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });

  const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // const [guess, setGuess] = useState<string[]>([])
    const [guessedLetters, setGuessedLetters] = useState<String[]>([]);

  const incorrectLetters = guessedLetters.filter((letter: any) => !word.includes(letter))

  const isLoser: boolean = incorrectLetters.length >= 6;
  const isWinner = incorrectLetters.length < 6 && word.split("").every(letter => guessedLetters.includes(letter));




   useEffect(() =>{
    if(!isLoser) return;
    
     for(let i:number =0; i<word.length; i++){
     const randomHint: number =  Math.floor(Math.random() * word.length)
     setGuessedLetters((e) => [...e,  word[randomHint]] );
   }

   const handler = (e: KeyboardEvent) => {
    // ... your existing keyboard handler ...
  };

  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
    
   },[isLoser, word])

   




useEffect(() => {

  for(let i:number =0; i<1; i++){
     const randomHint: number =  Math.floor(Math.random() * word.length)
     setGuessedLetters((e) => [...e,  word[randomHint]] );
   }

  const handler = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (!keys.includes(key)) return;

    setGuessedLetters((current: string[]) => {
      
      if (current.includes(key)) return current;
      return [...current, key];
    });
  };

  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, []); 



    function addGuessedLetter(key: any) {
    // record the last key pressed / clicked
    if (guessedLetters.includes(key)) return;
    setGuessedLetters((e: any) => [...e, key]);
    console.log(guessedLetters);
  }

  const resetGame = () => {
  setGuessedLetters([]); 
  setWord(words[Math.floor(Math.random() * words.length)]); 
};




  return (
    <div className='h-full w-full flex flex-col gap-[2rem] items-center relative'>
      <h1 className={`text-6xl ${isLoser? "text-red-600 text-9xl absolute z-5 top-[20%] shadow-[0_0_50px] bg-gray-200 font-bold": isWinner? "text-green-600 text-9xl absolute z-5 top-[20%] shadow-[0_0_50px] bg-gray-200 font-bold": ""}`}>
        {isWinner? "YOU WON!!": isLoser? "YOU LOST!" : "WIN OR HANG!!"}
      </h1>

      {(isWinner || isLoser) && (
      <button 
        onClick={resetGame}
        className="absolute bottom-10 z-5 px-8 py-4 bg-blue-500 text-white text-2xl rounded-xl hover:bg-blue-600 transition-colors font-bold uppercase"
      >
        Play Again
      </button>
    )}

      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <Hangmanword WordToGuess = {word} guessedLetters ={guessedLetters} className={`${isLoser? "text-red-600": isWinner? "text-green-600": ""}`}/>
      <GameKeyboard disabled={isLoser || isWinner} guessedLetters ={guessedLetters} onClick={addGuessedLetter}/>
    </div>
  )
}

export default App
