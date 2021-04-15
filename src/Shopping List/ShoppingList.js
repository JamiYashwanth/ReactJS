import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm'

class ShoppingList extends Component{
    constructor(props){
        super(props);
        this.state={
            items: [
                {name : "Milk" , qty : "2"},
                {name : "Carrot" , qty : "10"}
            ]
        }
        this.showItems=this.showItems.bind(this);
        this.addItems=this.addItems.bind(this);
    }
    showItems(){
        return(
            <div>
                {this.state.items.map(st => (
                    <p>{st.name} : {st.qty}</p>
                ))}
            </div>
        );
    }
    addItems(item){
        this.setState(state => ({
            items : [...state.items,item]
        }))
    }
    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                <ShoppingListForm addItems={this.addItems}/>
                <br/>
                {this.showItems()}
            </div>
        );
    }
}

export default ShoppingList;