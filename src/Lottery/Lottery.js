import React, { Component } from 'react';
import Lotteryball from './Lotteryball';

class Lottery extends Component{
    constructor(props){
        super(props);
        this.state={ nums : Array.from({ length : this.props.maxBalls })};
        this.generate=this.generate.bind(this);
    };
    generate(){
        this.setState(curState => ({
            nums : curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum +1))
        }));
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Lotteryball num={n}/>)}
                </div>
                <button onClick={this.generate}>Generate numbers!!!</button>
            </div>
        );
    }
}

export default Lottery;