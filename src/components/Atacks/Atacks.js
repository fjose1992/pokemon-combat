import React, { Component } from "react";
import "./Atacks.css"

export default class Atacks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            atacks: ""
        }

    }

  
    render() {
        console.log("Atacks:",this.props.atacks);
        var atacksRender = "";
        if(this.props.atacks.length == 4){
            atacksRender = (
                <div className="row">
                    <div className="col-sm">
                        <a className="btn-atack atack-1"  href="#" onClick={(e) => this.props.deployAtack(this.props.atacks[0].nuAtckPower, this.props.atacks[0].imgAtck)} >{this.props.atacks[0].stAtckName}</a>
                        
                    </div>
                    <div className="col-sm ">
                        <a className="btn-atack atack-2"  href="#" onClick={(e) => this.props.deployAtack(this.props.atacks[1].nuAtckPower, this.props.atacks[1].imgAtck)}>{this.props.atacks[1].stAtckName}</a>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-sm mt-5">
                        <a className="btn-atack atack-3"  href="#" onClick={(e) => this.props.deployAtack(this.props.atacks[2].nuAtckPower, this.props.atacks[2].imgAtck)}>{this.props.atacks[2].stAtckName}</a>
                    </div>
                    <div className="col-sm mt-5">
                        <a className="btn-atack atack-4"  href="#" onClick={(e) => this.props.deployAtack(this.props.atacks[3].nuAtckPower, this.props.atacks[3].imgAtck)}>{this.props.atacks[3].stAtckName}</a>
                    </div>
                </div>
            );
        }
        return (
            <div className="col">
                <h3 className="title-atack-player-one">Ataques disponibles de Blastiose</h3>
                <div className="atacks-buttons">
                </div>
                {atacksRender}
                

            </div>
        )
    }



}