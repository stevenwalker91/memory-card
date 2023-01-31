import React from 'react';
import PropTypes from 'prop-types';

const Card = ({key, url, id, name}) => {

  return (
    <div className="card" key={key}>
      <img src={url} />
      <span>{name}</span>
    </div>
  )

};

Card.propTypes = {
  key: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};


export default Card;