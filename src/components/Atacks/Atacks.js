import React, { Component } from "react";
import "./Atacks.css"

export default class Atacks extends Component {

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
                <h3 className="title-atack-player-one">Ataques disponibles de Blastiose</h3>
                <div className="atacks-buttons">
                </div>

                <div className="row">
                    <div className="col-sm">
                        <a className="btn-atack atack-1" href="#">Rayo Burbuja</a>
                    </div>
                    <div className="col-sm ">
                        <a className="btn-atack atack-2" href="#">Surf</a>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm mt-5">
                        <a className="btn-atack atack-3" href="#">Rayo Burbuja</a>
                    </div>
                    <div className="col-sm mt-5">
                        <a className="btn-atack atack-4" href="#">Surf</a>
                    </div>
                </div>

            </div>
        )
    }



}