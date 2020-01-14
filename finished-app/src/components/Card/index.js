import React from 'react';
import { CardWrapper } from './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ name, imageUrl, id }) => (
  <CardWrapper>
    <Link to={`/pokemon/${id}`}>
      <p>{name}</p>
      <img src={imageUrl} alt={name} />
    </Link>
  </CardWrapper>
);

export default Card;
