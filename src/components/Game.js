import React, {useState, useEffect} from 'react';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';

const Game = () => {

  const [status, setStatus] = useState('play');
  const [scores, setScores] = useState({score: 0, highScore: 0});
  const [selectedCards, setSelectedCards] = useState([]);

  const resetScore = () => {
    setScore(0);
  }

  const updateScore = () => {
    setScore(score + 1);
  }

  const handleCardClick = (id) => {
    if (!selectedCards.find(element => element === id)){

      //first add the card to the array
      const currentCards = selectedCards;
      currentCards.push(id);
      console.log(currentCards)

      setSelectedCards(currentCards);

      // determine if high score also needs updated
      if (scores.score === scores.highScore) {
        setScores({score: scores.score + 1, highScore: scores.highScore + 1})
      } else {
        setScores({score: scores.score + 1, highScore: scores.highScore})
      }
      
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
