import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    
    return (
      <section className='App-header'>
        <h3> Nome: { pokemon.name } </h3>
        <p> Tipo: { pokemon.type } </p>
        <p> Peso: { pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit } </p>
        <img src={ pokemon.image } alt={ pokemon.name }/>
      </section>
    )
  }
}

export default Pokemon;