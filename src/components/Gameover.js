import React from 'react';
import PropTypes from 'prop-types';

const Gameover = ({status, newGame, score}) => {

  let successMessage;
  if (status === 'win') {
    successMessage = <p>You won! Well done you absolute legend. 🎉🎉</p>
  } else {
    successMessage = <p>Well done, you made it all the way to {score}. Can you make it the entire way to the end though?! <span className="emoji">🤠</span></p>
  }

  return (
    <main className="gameover">
      {successMessage}
      <button type="button" onClick={() => newGame()}>Play again</button>
    </main>
  )
};

Gameover.propTypes = {
  status: PropTypes.string.isRequired,
  newGame: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default Gameover;