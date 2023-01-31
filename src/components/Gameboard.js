import React from 'react';
import Characters from '../assets/data';

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

    return shuffledArray.map((item, index) => {
      console.log(<img src={`../assets/img/${item.fileName}`} key={index} />)
      return <img src={`./assets/img/${item.fileName}`} key={index} />
    })
  }



  return (
    <div className="gameboard">{generateGamePieces(Characters)}</div>
  )
}

export default Gameboard;