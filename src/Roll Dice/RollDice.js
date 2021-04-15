import React,{Component} from 'react';
import Die from './Die';

class RollDice extends Component{
    static defaultProps={
        sides:["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
        this.state={die1: "one", die2: "two"};
        this.roll=this.roll.bind(this);
    }
    roll(){
        const newdie1=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        const newdie2=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
        this.setState({die1: newdie1,die2: newdie2});
    }
    render(){
        return(
            <div>
                <h1>Roll Dice</h1>
                <div>
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/> 
                </div> 
                <button onClick={this.roll}>Roll Dice!!!</button>
            </div>
        );
    }
}

export default RollDice;