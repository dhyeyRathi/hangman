

type HangmanwordProps = {
    WordToGuess: String
    guessedLetters: String[]
    className: String
}

const Hangmanword = ({WordToGuess, guessedLetters, className} : HangmanwordProps) => {

    
  return (
    <div className={`flex gap-[.25em] text-6xl font-bold uppercase ${className}`}> 
        <div className='w- h-2 bg-black'/>

        {WordToGuess.split("").map((letter, index) => (
            <span className='border-b-8 border-black pb-3 ' key={index}>
                <span className={`${guessedLetters.includes(letter) ? "visible":"invisible"}`}>{letter}

                </span>
            </span>
        )) }
      
    </div>
  )
}

export default Hangmanword
