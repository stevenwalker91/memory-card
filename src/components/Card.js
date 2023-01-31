import React from 'react';
import PropTypes from 'prop-types';

const Card = ({url, id, name, onClick}) => {

  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={url} />
      <span>{name}</span>
    </div>
  )

};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default Card;