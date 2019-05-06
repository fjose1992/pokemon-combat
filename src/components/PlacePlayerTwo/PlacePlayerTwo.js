import React, { Component } from "react";
import "./PlacePlayerTwo.css"


export default class PlacePlayerTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imagePlayerTwo: ""
        }

    }


    render(){

        return (
            <div className="col">
                <div className="animationplayer">
                <img src={this.props.imagePlayerTwo} className="img-fluid " width="270" />
                </div>
            </div>
        )
    }



}