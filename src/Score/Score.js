import React,{Component} from 'react';

class Score extends Component{
    constructor(props){
        super(props);
        this.state={score:0};
        this.increment=this.increment.bind(this);
    };
    increment(){
        let s=this.state.score+1;
        this.setState({score: s});
    }
    render(){
        return(
            <div>
                <p>Score : {this.state.score}</p>
                <button onClick={this.increment}>Click to increment!!!</button>
            </div>
        );
    }
}

export default Score;