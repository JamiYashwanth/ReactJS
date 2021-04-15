import React, { Component } from 'react'
import axios from "axios";
import Card from './Card'
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

class Deck extends Component{
    constructor(props){
        super(props);
        this.state={
            deck: null ,
            drawn : []
        }
        this.getcard=this.getcard.bind(this);
    }
    async componentDidMount(){
        let deck = await axios.get(API_URL);
        this.setState({ deck : deck.data})
    }
    async getcard(){
        let cardUrl=`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`
        let Response = await axios.get(cardUrl);
        let res=Response.data;
        if(res.remaining !== 0 ){
            this.setState(st => ({
                drawn : [
                    ...st.drawn , {
                        key : res.cards[0].code,
                        id : res.deck_id,
                        image : res.cards[0].image
                    }
                ]
            }))
        }
        else{
            alert("Error!!!");
        }
        // console.log("rem=",res);
    }
    render(){
        const cards= this.state.drawn.map( current => (
            <Card image={current.image}/>
        ));
        return(
            <div>
                {cards}
                <button onClick={this.getcard}>Get card!!</button>
            </div>
        );
    }
}

export default Deck;