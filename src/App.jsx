import { useState } from 'react'
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';
import './App.css'

function App() {
  const [isGameStarted, setGameStarted] = useState(false)
  const toggleGameplay = ()=>{
    setGameStarted((prev) => !prev);
  };
  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGameplay}/>}
    
    </>
  )
}

export default App
