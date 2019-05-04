import React, { Component } from "react";
import './LifeStatusBar.css'

export default class LifeStatusBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photoURL: ""
        }

    }


    render() {

        return (
            <div className="row">
                <div className="col">
                    <p style={{ width: "80%" }} data-value="80" className="dataPlayer">Blastoide</p>
                    <progress max="100" value="80" className="lifePlayerOne">
                        <div className="progress-bar">
                            
                        </div>
                    </progress>
                </div>

                <div className="col">
                    <p style={{ width: "80%" }} data-value="80" className="dataPlayer">Charizar</p>
                    <progress max="100" value="80" className="lifePlayerTwo" style={{transform: "rotate(180deg)"}}>
                        <div className="progress-bar">
                            <span style={{ width: "80%" }}>40%</span>
                        </div>
                    </progress>
                </div>
            </div>
        )
    }



}