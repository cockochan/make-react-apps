import React, {useState, useRef} from 'react';
import './App.css';

function padTime(time){
  return time.toString().padStart(2,'0');

}
 
export default function App() {
  const [title,setTitle]=useState('start the timer');
  const [timeLeft, setTimeLeft]=useState(25 * 60);
  const minutes = padTime(Math.floor(timeLeft/60));
  const seconds  = padTime(timeLeft - minutes*60);
const intervalRef = useRef(null);
function resetTimer(){
  setTitle('Ready to go another round?')
  setTimeLeft(25 * 60);
}
  function startTimer(){
    // if (intervalRef.current!==null)return;
    setTitle(`You're  doing great!`)
  intervalRef.current =  setInterval(()=>{
      setTimeLeft(timeLeft=>{
        
        if (timeLeft>=1) return timeLeft-1;
resetTimer()
        return 0;
      });
  },1000);
  
}
function stopTimer (){
  if(intervalRef == null)return;
  clearInterval(intervalRef.current)
  setTitle('Keep it up!');
}
  return(
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
);
}
