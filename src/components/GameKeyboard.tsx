import React, { useEffect, useState } from "react";

type keyboardProps = {
  guessedLetters : String[];
  onClick : any;
  disabled: boolean
}

const GameKeyboard = ({guessedLetters, onClick, disabled = false}:keyboardProps) => {
  
  // const [lastKey, setLastKey] = useState("");
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

  return (
    <div className="w-2/4  h-20 grid grid-cols-10 gap-4 ">
      {keys.map((key, index) => (
        <button
          key={index}
          className={`h-20 w-20 border-2 flex scale-30 sm:scale-40 md:scale-60 lg:scale-80 justify-center  items-center text-2xl font-bold uppercase 
            ${guessedLetters.includes(key.toLowerCase()) || disabled ? "text-gray-400 border-gray-400" : "hover:bg-blue-300"}`}
          onClick={()=> onClick(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default GameKeyboard;
