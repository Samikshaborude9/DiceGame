import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div className='max-w-[1180px] h-screen mx-auto flex items-center'> 
    <div>
        <img src='/images/dices.png' alt='dice'/>
    </div>
    <div className="ml-10">
        <h1 className="text-[96px] whitespace-nowrap">Dice Game</h1>
        <button
  onClick={toggle}
  className="mt-4 px-6 py-3 bg-black text-white rounded-xl cursor-pointer transition"
>
  Play Now
</button>

      </div>
    </div>
  )
}

export default StartGame