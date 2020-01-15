import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DetailsWrapper, CardHeader, BackArrow } from './Details.css';
import { URL, cardByIdQuery } from '../../constants';

import { CardWrapper } from '../Card/Card.css';

const Details = () => {
  const [pokemon, setPokemon] = useState(null);

  const { id } = useParams();

  const fetchCard = useCallback(async () => {
    try {
      const res = await fetch(`${URL}${cardByIdQuery(id)}`);
      const { card } = await res.json();
      setPokemon(card);
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  useEffect(() => {
    fetchCard();
  }, [fetchCard]);

  return (
    pokemon && (
      <DetailsWrapper>
        <CardWrapper>
          <div>
            <CardHeader>
              <h3>{pokemon.name}</h3>
              <BackArrow>
                <Link to={`/`}>🠈</Link>
              </BackArrow>
            </CardHeader>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
          </div>
          <div>
            <p>HP: {pokemon.hp || 'N/A'}</p>
            <p>Nr {pokemon.number || 'N/A'}</p>
            <p>Artist: {pokemon.artist || 'N/A'}</p>
            <p>Rarity: {pokemon.rarity || 'N/A'}</p>
            Attacks:
            <ul>
              {pokemon.attacks &&
                pokemon.attacks.map(el => <li key={el.name}>{el.name}</li>)}
            </ul>
            <p>Series: {pokemon.series}</p>
            <p>Evolves from: {pokemon.evolvesFrom || 'N/A'}</p>
            <p>Set: {pokemon.set || 'N/A'}</p>
            <p>Subtype: {pokemon.subtype || 'N/A'}</p>
          </div>
        </CardWrapper>
      </DetailsWrapper>
    )
  );
};

export default Details;
