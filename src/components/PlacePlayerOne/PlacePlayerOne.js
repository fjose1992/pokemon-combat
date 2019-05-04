import React, { Component } from "react";


export default class PlacePlayerOne extends Component {

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
                    <img src="https://i.pinimg.com/originals/86/91/9b/86919b9ff6045fd1c3568973e0d050a4.png" className="img-fluid " width="270" />
                </div>
            </div>
        )
    }



}