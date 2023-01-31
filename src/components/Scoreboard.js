import React from 'react';
import PropTypes from 'prop-types';

const Scoreboard = ({score, highScore}) => {

  return (
    <header className="scoreboard">
        <h1>Memory Game</h1>
        <div className="score-container">
          <span>{`Current Score: ${score}`}</span>
          <span>{`High Score: ${highScore}`}</span>
        </div>
    </header>
  )
}

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  highScore: PropTypes.number.isRequired
};


export default Scoreboard;