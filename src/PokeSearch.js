import React, { Component } from 'react'

export default class PokeSearch extends Component {

    render() {
        
        return (
            <div>
                <input onChange={this.props.search} />
                <button onClick={this.props.click}>Get Yer Pokemon Here!</button>
            </div>
        );
    }
}