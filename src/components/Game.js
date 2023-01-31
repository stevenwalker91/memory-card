import React, {useState, useEffect} from 'react';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';

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

  const handleCardClick = (id) => {
    const selectedAlready = selectedCards.includes(id);
    if (!selectedAlready){
      //first add the card to the array
      const currentCards = selectedCards;
      currentCards.push(id);
      setSelectedCards(currentCards);
      updateScore();
      return
    }

    if (selectedAlready) {
      resetScores();
      setSelectedCards([]);
      setStatus('lose');
    }


  }



  return (
    <React.Fragment>
      <Scoreboard 
        score={scores.score}
        highScore={scores.highScore} 
      />
      <Gameboard 
        handleCardClick={handleCardClick}
      />
    </React.Fragment>
    
  )
}

export default Game;
