import React, {useState, useEffect} from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
const choices =[
  {id:1, name:'rock', component: Rock},
  {id:2, name:'paper', component: Paper},
  {id:3, name:'scissors', component: Scissors},
]

//handle wins and losses
//2 determine the winner based on choices
//3.reset the game
export default function App() {
  const [userChoice, setUserChoice]=useState(null)
  const [computerChoice, setComputerChoice]=useState(null)
  const [wins, setWins]=useState(0)
const [losses, setLosses]=useState(0)
const [gameState, setGameState]=useState(null)//win,loss,draw
  useEffect(()=>{
const randomChoice = choices[Math.floor(Math.random()*choices.length)];
setComputerChoice(randomChoice)
  },[])
  function  handleUserChoice (choice){
const chosenChoice= choices.find(c=>c.id===choice);
setUserChoice(chosenChoice);
//determine the winner
setGameState('win')
  }
  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins===1? 'Win':'Wins'}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      <div className="game-state"> <div className="game-state-content"><p>users icon</p><p>you won!</p></div></div>

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={()=>handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={()=>handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={()=>handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
