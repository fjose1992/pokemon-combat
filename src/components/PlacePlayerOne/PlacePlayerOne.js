import React, { Component } from "react";


export default class PlacePlayerOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imagePlayerOne: ""
        }

    }


    render(){

        return (
            <div className="col">
                <div className="animationplayer">
                    <img src={this.props.imagePlayerOne} className="img-fluid " width="270" />
                </div>
            </div>
        )
    }



}