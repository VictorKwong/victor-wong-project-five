import React, { Component } from 'react';
import pokeball from '../assets/images/pokeball.png'

class Header extends Component{
    render(){
        return(
            <header>
                <div className="pokeBallSize">
                    <img src={pokeball} alt="Pokemon ball"></img>
                </div>
                <h1>Pokemon Battle</h1>
                <div className="pokeBallSize">
                    <img src={pokeball} alt="Pokemon ball"></img>
                </div>
            </header>
        )
    }
}

export default Header;