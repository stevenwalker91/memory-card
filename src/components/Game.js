import React, {useState} from 'react';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import Characters from '../assets/data.json';
import Gameover from './Gameover';

const Game = () => {

  const [status, setStatus] = useState('play');
  const [scores, setScores] = useState({score: 0, highScore: 0});
  const [selectedCards, setSelectedCards] = useState([]);

  const resetScores = () => {
    setScores({score: 0, highScore: scores.highScore})
  }

  // if high score = score then also update
  const updateScore = () => {
    if (scores.score === scores.highScore) {
      setScores({score: scores.score + 1, highScore: scores.highScore + 1})
    } else {
      setScores({score: scores.score + 1, highScore: scores.highScore})
    }
  }

  const newGame = () => {
    resetScores();
    setStatus('play');
  };

  const handleWin = () => {
    console.log(`gameover`)
    setSelectedCards([]);
    setStatus('win');
  };

  const handleLose = () => {
    setSelectedCards([]);
    setStatus('lose');
  };

  const makeMove = (id) => {
    const currentCards = selectedCards;
    currentCards.push(id);
    setSelectedCards(currentCards);
    updateScore();
  };

  const handleCardClick = (id) => {
    const selectedAlready = selectedCards.includes(id);

    if (selectedAlready) {
      handleLose();
    }

    if (!selectedAlready){
      makeMove(id);
    }

    const gameWon = Characters.length === selectedCards.length;
    if (gameWon) {
      handleWin();
    }
  };

  return (
    <React.Fragment>
      <Scoreboard 
        score={scores.score}
        highScore={scores.highScore} 
      />
      { status === 'play' ? 
        <Gameboard 
          handleCardClick={handleCardClick}
          selectedCards={selectedCards}
        /> 
      : 
        <Gameover 
          status={status}
          newGame={newGame}
          score={scores.score}
        />
      }
    </React.Fragment>
    
  )
};

export default Game;
