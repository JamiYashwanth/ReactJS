import React, { Component } from 'react'
import { Route } from 'react-router'
import Image from './Image'

class ImageDisplay extends Component{
    render(){
        return(
            <div>
                <Route
                    exact
                    path="/ImageDisplay/:name"
                    render={routeProps => <Image {...routeProps}/>} 
                />
            </div>
        );
    }
}

export default ImageDisplay;