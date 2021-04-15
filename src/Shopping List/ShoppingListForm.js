import React, { Component } from 'react'

class ShoppingListForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "",
            qty : ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItems(this.state);
        this.setState({name :"" , qty: ""});
    }
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>Product  : </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input><br/>
                    <label>Quantity : </label>
                    <input type="text" name="qty" value={this.state.qty} onChange={this.handleChange}></input><br/>
                    <button>Add Item</button>
                </form>
            </div>
        );
    }
}
export default ShoppingListForm;