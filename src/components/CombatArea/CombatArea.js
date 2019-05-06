import React, { Component } from "react";


export default class CombatArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageAtack: ""
        }

    }
  
    render() {
       
        return (
            <div className="col">              
                <img src={this.props.imageAtack} className="img-fluid "  width="570" /> 
            </div>

        );
    }


}