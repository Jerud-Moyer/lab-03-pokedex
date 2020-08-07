import React, { Component } from 'react'

export default class PokeSearch extends Component {

    render() {
        
        return (
            <div className='ui'>
                <input onChange={this.props.search} />
                <select onChange={this.props.searchBy} >
                    <option value='pokemon'>name</option>
                    <option value='type'>type</option>
                    <option value='attack'>attack</option>
                    <option value='defense'>defense</option>
                </select>
                <button onClick={this.props.click}>Get Yer Pokemon Here!</button>
            </div>
        );
    }
}