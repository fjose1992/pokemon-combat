import React, { Component } from "react";


export default class CombatArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageAtack: "https://backgrounddownload.com/wp-content/uploads/2018/09/pokemon-arena-background-3.png"
        }

    }
  
    render() {
       
        return (
            <div className="col">              
                <img src={this.state.imageAtack} className="img-fluid "  width="570" /> 
            </div>

        );
    }


}