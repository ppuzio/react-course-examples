import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsWrapper } from './Details.css';
import { URL, cardByIdQuery } from '../../constants';
import { Link } from 'react-router-dom';

const Details = () => {
  const [pokemon, setPokemon] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${URL}${cardByIdQuery(id)}`)
      .then(response => response.json())
      .then(json => setPokemon(json.card))
      .catch(error => console.log(error));
  }, [id]);

  return (
    pokemon && (
      <DetailsWrapper>
        <Link to={`/`}>Go back</Link>
        <div>
          <h3> {pokemon.name} </h3>
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
      </DetailsWrapper>
    )
  );
};

export default Details;
