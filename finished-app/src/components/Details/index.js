import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { cardByIdQuery, URL } from '../../constants';
import { CardWrapper } from '../Card/Card.css';
import {
  ArtistParagraph,
  AttackWrapper,
  BackArrow,
  CardHeader,
  DetailsWrapper,
} from './Details.css';

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
  const type = pokemon && pokemon.types[0];

  return pokemon ? (
    <DetailsWrapper>
      <CardWrapper type={type}>
        <BackArrow>
          <Link to={`/`}>🠈</Link>
        </BackArrow>
        <div>
          <CardHeader>
            <h3>{pokemon.name}</h3>
            <p>HP: {pokemon.hp || 'N/A'}</p>
          </CardHeader>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
        </div>
        <div>
          {pokemon.attacks &&
            pokemon.attacks.map(el => (
              <div key={el.name}>
                <AttackWrapper>
                  <p>{el.name}</p>
                  <p>{el.damage}</p>
                </AttackWrapper>
                <p>{el.text}</p>
              </div>
            ))}
          <ArtistParagraph>Artist: {pokemon.artist || 'N/A'}</ArtistParagraph>
        </div>
      </CardWrapper>
    </DetailsWrapper>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Details;
