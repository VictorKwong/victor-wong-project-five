import React, { Component } from 'react';

class Result extends Component{
    render(){
        return(
        <div>
            { this.props.final === true ? <p>You Won the Battle!</p> : this.props.final === false ? <p>Opps..Try Again!</p> : null }
        </div>
        )
    }
}
export default Result;
