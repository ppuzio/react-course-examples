import React, { useEffect, useState } from 'react';
import { cardsQuery, URL } from '../../constants';
import Card from '../Card';
import SearchBar from '../SearchBar';
import { CardList } from './CardList.css';

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
        {filteredPokemons.length ? (
          filteredPokemons.map(
            pokemon =>
              pokemon && (
                <Card
                  id={pokemon.id}
                  imageUrl={pokemon.imageUrl}
                  key={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              ),
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </CardList>
    </>
  );
};
export default Deck;
