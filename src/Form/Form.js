import React, { Component } from 'react'

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            username : "",
            email : "",
            password : ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value});
    }
    handleSubmit(evt){
        evt.preventDefault();
        alert(`You are ${this.state.username}`);
        this.setState({username : "",email : "", password : ""}); 
    }
    render(){
        return(
            <div>
                <h1>Form</h1><br/>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username : </label>
                    <input type="text" name ="username" value={this.state.username} onChange={this.handleChange} placeholder="username" id="username"/><br></br>
                    <label htmlFor="email">Email ID    : </label>
                    <input type="email" name ="email" value={this.state.email} onChange={this.handleChange} placeholder="email" id="email"/><br/>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name ="password" value={this.state.password} onChange={this.handleChange} placeholder="password" id="password"/><br></br><br/>
                    <button>Submit!!!</button>
                </form>
            </div>
        );
    }
}

export default Form;