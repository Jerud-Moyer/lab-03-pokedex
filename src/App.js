import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    
} from 'react-router-dom';

import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';


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
