import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { CardList } from './CardList.css';
import { URL, cardsQuery } from '../../constants';
import SearchBar from '../SearchBar';

const Deck = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery),
  );

  useEffect(() => {
    fetch(`${URL}${cardsQuery}`)
      .then(response => response.json())
      .then(json => setPokemons(json.cards))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <SearchBar returnValue={setSearchQuery} />
      <CardList>
        {filteredPokemons.map(
          pokemon =>
            pokemon && (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
              />
            ),
        )}
      </CardList>
    </>
  );
};
export default Deck;
