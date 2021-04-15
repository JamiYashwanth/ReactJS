import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SearchForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "",
            textDecorationLine : "none",
            color: "Red",
            margin : 10
        }
        this.handleChange=this.handleChange.bind(this);
        this.style=this.style.bind(this);
    }
    handleChange(evt){
        this.setState({
            name : evt.target.value 
        })
    }
    style(){
        return(
            {color: "Red"},
            {textdecorationLine : "none"}
        );
    }
    render(){
        return(
            <div>
                <h1>Search Image</h1>
                <input type="text" placeholder="Search here!!" value={this.state.name} onChange={this.handleChange}/>
                <Link style={this.state} to={`/ImageDisplay/${this.state.name}`}>Go!</Link>
            </div>
        );
    }
}

export default SearchForm;