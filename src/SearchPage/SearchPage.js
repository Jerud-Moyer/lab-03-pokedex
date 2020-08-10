import React, { Component } from 'react';
import Header from '../Header.js';
import request from 'superagent';
import PokeSearch from '../Search/PokeSearch.js';
import PokeDisplay from '../DisplayPage/PokeDisplay.js';
import '../App.css'

export default class SearchPage extends Component {
  state = {
    search: '',
    searchBy: 'pokemon',
    isLoading: false,
    pokeState: [],
    currentPage: 1,
    totalPages: 1,
    type: ''
  }

  componentDidMount = async () => {
    const params = new URLSearchParams(this.props.location.search);
    const searchBy = params.get('searchBy');
    const page = params.get('page');
    const search = params.get('search');
    console.log(page)
    if (searchBy && page && search) {
      await this.setState({
        searchBy: searchBy,
        currentPage: page,
        search: search
      });
    }
    await this.makeRequest()
  }
  
  makeRequest = async () => {
    this.setState({ isLoading: true });
    const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);
   
    await this.setState({
      pokeState: pokeData.body.results,
      totalPages: Math.ceil(pokeData.body.count / 20),
      isLoading:false,
    })

    const params = new URLSearchParams(this.props.location.search);

     params.set('search', this.state.search);
     params.set('searchBy', this.state.searchBy);
     params.set('page', this.state.currentPage);

     this.props.history.push('?' + params.toString())
     
  }

  handlePrevClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) -1 })
    await this.makeRequest()
  }

  handleNextClick = async () => {
    await this.setState({ currentPage: Number(this.state.currentPage) +1 })
    await this.makeRequest()
  }
  
  searchValue = (e) => this.setState({search: e.target.value})
  searchValueB = (e) => this.setState({searchBy: e.target.value})
  render() {
    return (
      <div className='main-box'>
        
        <Header className='header-box'/>
        
        <div className='lower-main-box' > 
          <PokeSearch search={this.searchValue} searchBy={this.searchValueB} click={this.makeRequest} />
          <PokeDisplay  pokeState={this.state.pokeState} clicka={this.handlePrevClick} clickb={this.handleNextClick} />
        </div>
      </div>
    )
  }
}

