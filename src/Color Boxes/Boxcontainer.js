import React, { Component } from 'react'
import Colorboxes from './Colorboxes'
import './Colorbox.css'

class Boxcontainer extends Component{
    static defaultProps={
        nums:16
    }
    render(){
        const arr= Array.from({length : this.props.nums}).map(() => <Colorboxes/>)
        return(
            <div className="Bo">{arr}</div>
        );
    }
}

export default Boxcontainer;