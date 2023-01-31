import React, {useState} from 'react';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';

const Game = () => {

  const [status, setStatus] = useState('play');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const resetScore = () => {
    setScore(0);
  }

  const updateScore = () => {
    setScore(score + 1);
  }



  return (
    <React.Fragment>
      <Scoreboard score={score} highScore={highScore} />
      <Gameboard />
    </React.Fragment>
    
  )
}

export default Game;
