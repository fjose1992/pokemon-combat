import React, { Component } from "react";
import './LifeStatusBar.css'

export default class LifeStatusBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lifeStatusBarTwo: 100,
            lifeStatusBarOne: 100,
            namePlayerTwo: "",
            namePlayerOne: "",
        }

    }


    render() {

        return (
            <div className="row">
                <div className="col">
                    <p style={{ width: "80%" }} data-value={this.props.lifeStatusBarOne} className="dataPlayer">{this.props.namePlayerOne}</p>
                    <progress max="100" value={this.props.lifeStatusBarOne} className="lifePlayerOne">
                        <div className="progress-bar">
                            
                        </div>
                    </progress>
                </div>

                <div className="col">
                    <p style={{ width: "80%" }} data-value={this.props.lifeStatusBarTwo} className="dataPlayer">{this.props.namePlayerTwo}</p>
                    <progress max="100" value={this.props.lifeStatusBarTwo} className="lifePlayerTwo" style={{transform: "rotate(180deg)"}}>
                        <div className="progress-bar">
                            
                        </div>
                    </progress>
                </div>
            </div>
        )
    }



}