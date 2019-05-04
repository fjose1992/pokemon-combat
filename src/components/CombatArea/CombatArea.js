import React, { Component } from "react";


export default class CombatArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photoURL: ""
        }

    }
  
    render() {
        return (
            <div className="col">              
                <img src="https://i.pinimg.com/originals/76/f4/58/76f458f8b83deb0e2b927c451e74c134.gif" className="img-fluid "  width="570" /> 
            </div>

        );
    }


}