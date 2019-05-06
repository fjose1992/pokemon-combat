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
        var lifeStatusBarOne = (this.props.lifeStatusBarOne <= 0)? 0 : this.props.lifeStatusBarOne;
        var lifeStatusBarTwo = (this.props.lifeStatusBarTwo <=0)? 0 : this.props.lifeStatusBarTwo;
        return (
            <div className="row">
                <div className="col">
                    <p style={{ width: "80%" }} data-value={lifeStatusBarOne} className="dataPlayer">{this.props.namePlayerOne}</p>
                    <progress max="100" value={lifeStatusBarOne} className="lifePlayerOne">
                        <div className="progress-bar">
                            
                        </div>
                    </progress>
                </div>

                <div className="col">
                    <p style={{ width: "80%" }} data-value={lifeStatusBarTwo} className="dataPlayer">{this.props.namePlayerTwo}</p>
                    <progress max="100" value={lifeStatusBarTwo} className="lifePlayerTwo" style={{transform: "rotate(180deg)"}}>
                        <div className="progress-bar">
                            
                        </div>
                    </progress>
                </div>
            </div>
        )
    }



}