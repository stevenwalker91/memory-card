import React from 'react';
import PropTypes from 'prop-types';
import Characters from '../assets/data';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const Gameboard = ({handleCardClick}) => {

  const shuffle = (arr) => {
    let index = arr.length;
    let randomIndex;

    while (index !== 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;
      [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
    }
    return arr;
  }

  const generateGamePieces = (arr) => {
    const shuffledArray = shuffle(arr);
    const filteredArray = shuffledArray.filter((item, index) => index < 5);
    return filteredArray.map((item) => {
      return (
        <Card 
          key={uuidv4()}
          url={`./assets/img/${item.fileName}`}
          name={item.characterName}
          id={item.id}
          onClick={handleCardClick}

        />
      )
    })
  }

  return (
    <main className="gameboard">{generateGamePieces(Characters)}</main>
  )
}

Gameboard.propTypes = {
  handleCardClick: PropTypes.func.isRequired
};

export default Gameboard;