import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from 'react-router-dom';
import PokeSearch from './Search/PokeSearch.js';
import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import request from 'superagent';

export default class App extends Component {
    state = {
        search: '',
        isLoading: false,
        pokeState: []
    }
    render() {
        return (
            <div>
                      <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                          <Route 
                            path="/detail/:myPokemonId" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                      
                    </Switch>
                </Router>
            </div>
        )
    }
}
