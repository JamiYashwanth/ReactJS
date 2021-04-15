import React, { Component } from 'react'


class Icons extends Component{
    static defaultProps={
        options:[
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "cloud"
        ]
    };
    constructor(props){
        super(props);
        this.state={icons : ["angry"]};
        this.addIcon=this.addIcon.bind(this);
    }
    // addIcon(){
    //     let index=Math.floor(Math.random() * this.props.options.length);
    //     let iconindex=this.props.options[index];
    //     let icons=this.state.icons;
    //     icons.push(iconindex);
    //     this.setState({icons: icons});
    // }
    addIcon(){
        let index=Math.floor(Math.random() * this.props.options.length);
        let iconindex=this.props.options[index];
        this.setState({icons : [...this.state.icons , iconindex]});
    }
    render(){
        const icons=this.state.icons.map(ic => <i className={`fas fa-${ic}`}/>);
        return(
            <div>
                <p>Icons : {icons}</p>
                <button onClick={this.addIcon}>Add Icons</button>
            </div>
        );
    }
}

export default Icons;