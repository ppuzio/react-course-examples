import React from 'react';
import { Link } from 'react-router-dom';

import { CardWrapper, Name } from './Card.css';

const returnRGB = pokeNumber => {
  let color;
  if (!pokeNumber) {
    color = 0;
  } else if (pokeNumber < 100) {
    color = pokeNumber / 5;
  } else {
    color = 255 - pokeNumber / 5;
  }
  return `${color}, ${color}, ${color}`;
};

const Card = ({ name, imageUrl, id, pokeNumber }) => {
  const color = returnRGB(pokeNumber);
  return (
    <CardWrapper>
      <Link to={`/pokemon/${id}`}>
        <Name color={color}>{name}</Name>
        <img src={imageUrl} alt={name} />
      </Link>
    </CardWrapper>
  );
};

export default Card;
