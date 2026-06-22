import React from 'react'

type Props = {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: Props) => {

  const head =(<div className='w-20 h-20 border-8 absolute left-54 top-10 rounded-full'/>)
  const body =(<div className='w-2 h-30 bg-black absolute left-63 top-30 '/>)
  const rightArm =(<div className='w-2 h-15 bg-black absolute rotate-135 left-58 top-30 '/>)
  const leftArm =(<div className='w-2 h-15 bg-black absolute rotate-225 left-68 top-30 '/>)
  const rightLeg =(<div className='w-2 h-15 bg-black absolute rotate-45 left-58 top-57 '/>)
  const leftLeg =(<div className='w-2 h-15 bg-black absolute rotate-315 left-68 top-57 '/>)

  const man = [head, body, rightArm, leftArm, rightLeg, leftLeg]

  return (
    <div className='relative'>
      {man.slice(0, numberOfGuesses).map((e, index) =>(
        <div key={index}>{e}</div>
      ))}
      <div className='h-10 w-2 bg-black left-63 absolute '/>
      <div className='h-2 w-40 bg-black ml-25'/>
      <div className='h-80 w-2 bg-black ml-25'/>
      <div className='h-2 w-60 bg-black'/>
      
    </div>
  )
}

export default HangmanDrawing
