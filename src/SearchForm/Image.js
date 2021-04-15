import React, { Component } from 'react'

class Image extends Component{
    render(){
        const name=this.props.match.params.name;
        const url=`https://source.unsplash.com/1600x900/?${name}`;
        return(
            <div>
                <h1>{name}</h1>
                <img style={{height:200}} src={url}/>
            </div>
        );
    }
}

export default Image;