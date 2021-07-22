import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pok) => <Pokemon pokemon={pok} />)
    )
  }
}
export default Pokedex;
