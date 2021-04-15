import React, { Component } from 'react'
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import './AllTodoLists.css'

class AllTodoLists extends Component{
    constructor(props){
        super(props);
        this.state={
            AllTodos : [  ]
        }
        this.addTodo=this.addTodo.bind(this);
        this.remove=this.remove.bind(this)
    }
    addTodo(todo){
        let todoitem= {name : todo.name,id: uuidv4()}
        this.setState(state => ({
            AllTodos : [...state.AllTodos,todoitem]
        }))
    }
    remove(id){
        // console.log("id=",id)
        this.setState({
            AllTodos : this.state.AllTodos.filter(todo => todo.id!==id)
        })
    }
    render(){
        console.log(this.state.AllTodos)
        return(
            <div>
                <h1>Todo List</h1>
                <br/>
                <TodoList addTodo={this.addTodo}/>
                <br/>
                {this.state.AllTodos.map(st => 
                    <div className="list">
                        <li>{st.name}</li>
                        <button onClick={()=> this.remove(st.id)}>Delete</button>
                    </div>
                )}
            </div>
        );
    }
}

export default AllTodoLists;