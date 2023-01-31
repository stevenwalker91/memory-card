import React from 'react';
import Characters from '../assets/data';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';

const Gameboard = () => {

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
        />
      )
    })
  }

  return (
    <main className="gameboard">{generateGamePieces(Characters)}</main>
  )
}

export default Gameboard;