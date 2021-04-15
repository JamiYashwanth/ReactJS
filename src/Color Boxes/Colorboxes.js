import React, { Component } from 'react'
import './Colorbox.css'

class Colorboxes extends Component{
    static defaultProps={
        colors :[
            "purple","magneta","red","green","white","black","darkblue","yellow","silver"
        ]
    }
    constructor(props){
        super(props);
        let col;
        do{
            let randomidx= Math.floor(Math.random() * this.props.colors.length);
            col=this.props.colors[randomidx];
        }while(col === this.props.colors[0]);
        this.state={
            color: col,
        }
        this.colorchange=this.colorchange.bind(this);
    }
    colorchange(){
        let col;
        do{
            let randomidx= Math.floor(Math.random() * this.props.colors.length);
            col=this.props.colors[randomidx];
        }while(col === this.state.color);
        this.setState({
            color : col
        })
    }
    render(){
        return(
            <div className="Box" style={{backgroundColor : this.state.color}} onClick={this.colorchange}></div>
        );
    }
}

export default Colorboxes;