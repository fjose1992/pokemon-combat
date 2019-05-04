import React, { Component } from "react";
import "./PlacePlayerTwo.css"


export default class PlacePlayerTwo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photoURL: ""
        }

    }


    render(){

        return (
            <div className="col">
                <div className="animationplayer">
                <img src="https://www.pngarts.com/files/3/Charizard-PNG-Image-Background.png" className="img-fluid " width="470" />
                </div>
            </div>
        )
    }



}