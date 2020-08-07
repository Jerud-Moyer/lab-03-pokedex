import React, { Component } from 'react';
import request from 'superagent';
import '../App.css';
import { Link } from 'react-router-dom';
export default class DetailPage extends Component {
    state = { pokemon: null }

    componentDidMount = async () => {
        const name = this.props.match.params.myPokemonId;
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);
        
        const pokemon = data.body.results[0];
        this.setState({ pokemon: pokemon })
    }
    render() {
        const { pokemon } = this.state
        return (
            <div className='result-outer'>
                {
                    pokemon
                        ? <div className='result-inner'>
                            <p>{pokemon.pokemon}</p>
                            <p>Type: {pokemon.type_1}</p>
                            <p>Defense: {pokemon.defense}</p>
                            <p>Attack: {pokemon.attack}</p>
                            <img src={pokemon.url_image} alt={pokemon.pokemon} />
                            <Link className='Links' to={'/'} >Back to Pokedex!</Link>
                        </div>
                            : <h1>loading</h1>



                }
                
            </div>
        )
    }
}
