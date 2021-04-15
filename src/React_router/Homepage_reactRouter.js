import React, { Component } from 'react'
import {Route,NavLink,Switch} from "react-router-dom";
import About from './About'
import Virat from './Virat'
import Elon from './Elon'
import './Stylereactrouter.css';
import './Block.css';

class Homepage extends Component{
    render(){
        return(
            <div className="Reactrouter">
                <nav className="app-nav"> 
                    <NavLink exact activeClassName="active-bar" className="nav-bar" to='/Virat'>Virat Kohli</NavLink>
                    <NavLink exact activeClassName="active-bar" className="nav-bar" to='/'>Elon Musk</NavLink>
                    <NavLink exact activeClassName="active-bar" className="nav-bar" to='/About'>About</NavLink>
                </nav>
                <Switch>
                    <Route exact path="/About" component={About}/>
                    <Route exact path="/Virat" component={Virat}/>
                    <Route exact path="/" component={Elon}/>
                </Switch>
            </div>
        );
    }
}

export default Homepage;