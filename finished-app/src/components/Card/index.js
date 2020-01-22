import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper } from './Card.css';

const Card = ({ name, imageUrl, id, types = [] }) => {
  const [type] = types;
  return (
    <CardWrapper type={type}>
      <Link to={`/pokemon/${id}`}>
        <p>{name}</p>
        <img src={imageUrl} alt={name} />
      </Link>
    </CardWrapper>
  );
};

export default Card;
