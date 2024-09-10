import './App.css'
import { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState(null);

  function randomNumber() {
    return Math.floor(Math.random() * 1026);
  }

  async function onClick() {

    const pokemonId = randomNumber();

    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
    const response = await fetch(url);gt 


    const data = await response.json();


    const newPokemon = {
      id: data.id,
      name: data.name,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      image: data.sprites.other.dream_world.front_default?? data.sprites.other.home.front_default,
    };

    console.log("A brand new pokemon", newPokemon);

    setPokemon(newPokemon);
  }

  return (
    <div>
      <button onClick={onClick}>Generate Random Pokemon</button>

      {pokemon && (
        <div className='.card'>
          <h3 className='id'>id: #{pokemon.id} </h3>
          <img src={pokemon.image} />
          <h1>name:{pokemon.name} </h1>
          <h3>Attack:{pokemon.attack}</h3>
          <h3>Defense:{pokemon.defense}</h3>
          <h2>Special Attack:{pokemon.specialAttack}</h2>
        </div>
      )};
    </div>
  );
}

export default App
