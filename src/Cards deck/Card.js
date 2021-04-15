import React, { Component } from 'react'

class Card extends Component{
    render(){
        return(
            <img src={this.props.image} />
        );
    }
}

export default Card;