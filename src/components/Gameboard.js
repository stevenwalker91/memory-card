import React from 'react';
import PropTypes from 'prop-types';
import Characters from '../assets/data';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const Gameboard = ({handleCardClick, selectedCards}) => {

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
    // initialise counter to limit filter results
    let counter = 0;

    // filter will check if this is true to determine if valid option exists
    let containsValidValue = false;

    // shuffle the array so it's completely random
    const shuffledArray = shuffle(arr);
    
    // we need to make sure the filtered list has at least one valid option
    const filter = (item, index) => {
      
      let validValue = !selectedCards.includes(item.id);
      validValue ? containsValidValue = true : containsValidValue = false;

      if (index === 5 && !containsValidValue ) {
        console.log(`${item.id} is not valid`)
        return false
      }

      // limit so we can only get 5 results
      if (counter < 5) {
        counter ++;
      return true
      }

    }
    const filteredArray = shuffledArray.filter(filter);
    const reShuffle = shuffle(filteredArray);
    return reShuffle.map((item) => {
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
  handleCardClick: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired
};

export default Gameboard;