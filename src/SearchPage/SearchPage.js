import React, { Component } from 'react';
import Header from '../Header.js';
import request from 'superagent';
import PokeSearch from '../Search/PokeSearch.js';
import PokeDisplay from '../DisplayPage/PokeDisplay.js';
import '../App.css'
export default class App extends Component {
  state = {
    search: '',
    isLoading: false,
    pokeState: []
  }

  handleClick = async () => {
    this.setState({ isLoading: true })
    const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);
    this.setState({
      pokeState: pokeData.body.results,
      isLoading: false,
    })
    console.log(pokeData)
  }

  searchValue = (e) => this.setState({search: e.target.value})
  render() {
    return (
      <div className='main-box'>
        <Header/>
        <PokeSearch search={this.searchValue} click={this.handleClick} />
        <PokeDisplay  pokeState={this.state.pokeState}/>
      </div>
    )
  }
}

