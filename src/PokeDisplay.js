import React, { Component } from 'react'

export default class PokeDisplay extends Component {
    render() {
        return (
            <div className='big-box'>
                {
                this.props.isLoading
                    ? <p>LOADING!</p>
                : this.props.pokeState.map(poke => <p className='card'>{poke.pokemon} : {poke.defense} : {<img className='poke-box' src={poke.url_image} alt='farts'/>}</p>)
                }
                
            </div>
        )
    }
}
