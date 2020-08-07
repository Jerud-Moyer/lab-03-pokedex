import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class PokeDisplay extends Component {
    render() {
       
        return (
            <div className='big-box'>
                {
                this.props.isLoading
                    ? <p>LOADING!</p>
                : this.props.pokeState.map(poke => 
                <Link className='Links' to={`/detail/${poke.pokemon}`}>
                <p className='card'>{poke.pokemon} : {poke.defense} : {<img className='poke-box' src={poke.url_image} alt='farts'/>}</p></Link>)
                }
                
            </div>
        )
    }
}
