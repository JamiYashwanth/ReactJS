import React, { Component } from 'react'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "",
            id: ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({name:"",id:""})
    }
    handleChange(evt){
        this.setState({
            name : evt.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default TodoList;