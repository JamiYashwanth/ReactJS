import React, { Component } from 'react'
import './Coinflipper.css';

class Coinflipper extends Component{
    static defaultProps = {
        coins : [
            {side : "heads" , imgSrc : "https://venkatarun.files.wordpress.com/2015/11/india-1-rupee-2013.jpg"},
            {side : "tails" , imgSrc : "https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png"}
        ]
    };
    constructor(props){
        super(props);
        this.state={
            no_heads : 0,
            no_tails : 0,
            no_flips : 0,
            image : "https://venkatarun.files.wordpress.com/2015/11/india-1-rupee-2013.jpg"
        }
        this.flip=this.flip.bind(this);
    }
    flip(){
        // console.log(this.props.coins[0].imgSrc);
        let randomindx=Math.floor(Math.random() * this.props.coins.length);
        let pic=this.props.coins[randomindx];
        this.setState(st => {
            return{
                image : pic.imgSrc,
                no_flips : st.no_flips+1,
                no_heads : st.no_heads + (pic.side==="heads" ? 1 : 0),
                no_tails : st.no_tails + (pic.side==="tails" ? 1 : 0)
            }
        });
        // this.setState({
        //     image : pic.imgSrc,
        //     no_flips : this.no_flips+1
        // });
    }
    render(){
        return(
            <div>
                {/* <h1>Let's flip the coin</h1> */}
                <h1>Click to Flip</h1>
                <div>
                    <img src={this.state.image}></img>
                </div>
                <button onClick={this.flip}>Click to flip randomly!!!</button>
                <h2>Out of {this.state.no_flips} flips , there have been {this.state.no_heads} heads and {this.state.no_tails} tails</h2>
            </div>
        );
    }
}

export default Coinflipper;