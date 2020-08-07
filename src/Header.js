import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='head-box'>
                <ul>
                    <a className='nav-link' href="/detail">Detail</a>
                </ul>
                POKEDEX
                <ul>
                    <a className='nav-link' href="/">Home</a>
                </ul>
            </div>
        )
    }
}

