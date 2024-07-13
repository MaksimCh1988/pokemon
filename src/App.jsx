import Counter from './components/Counter';
import Grid from './components/Grid';
import { Pokemon } from './components/Pokemon';
import pokemonList from './assets/pokemonlist';
import { useState, useMemo, useCallback } from 'react';

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// GET
// https://pokeapi.co/api/v2/pokemon/?offset=50&limit=8

// <PageSizeSelector />

// pageSize = 12

// ← 5/97 →

// {
//   "name": "dugtrio",
//   "url": "https://pokeapi.co/api/v2/pokemon/51/"
// },

function getRandomPokemons(list, quantity) {
  const result = [];
  while (result.length !== quantity) {
    const randomPokemon =
      list[getRandomIntInclusive(0, pokemonList.length - 1)];
    if (result.some((pokemon) => pokemon.id === randomPokemon.id)) {
      continue;
    }
    result.push(randomPokemon);
  }
  return result;
}

const App = () => {
  console.log('🎨', 'App');

  const randomPokemonList = useMemo(
    () => getRandomPokemons(pokemonList, 8),
    [pokemonList]
  );

  const [capturedPokemons, setCapturedPokemons] = useState([]);

  

  
  const setCapturedPokemonsHandler = useCallback(
    async function setCapturedPokemonsHandler(id) {
      await new Promise((r) => setTimeout(r, 10));
      // setCapturedPokemons(
      //   capturedPokemons.includes(id)
      //     ? capturedPokemons.filter((value) => value !== id)
      //     : [...capturedPokemons, id]
      // );
  
      setCapturedPokemons((prev) =>
        prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
      );
    },
    []
  );
  
  // const useCallback = (fn, deps) => useMemo(() => fn, deps);

  return (
    <>
      <Counter
        currentScore={capturedPokemons.length}
        maxScore={randomPokemonList.length}
      />
      <Grid>
        {randomPokemonList.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            captured={capturedPokemons.includes(pokemon.id)}
            onButtonClick={setCapturedPokemonsHandler}
          />
        ))}
      </Grid>
    </>
  );
};

export default App;
