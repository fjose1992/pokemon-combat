import React, { Component } from "react";
import $ from 'jquery';
import './windowFinishGame.css';

export default class WindowFinishGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateGamePlayerOne: 0,
            stateGamePlayerTwo: 0,
        }

    }


    render() {
        
        console.log("AAAAAAA", this.props.stateGame);
            //Cuando el usuario gana
            if(this.props.stateGamePlayerTwo == 1){
                $("#bg-modal-finish").addClass("bg-finish-win");
                $("#btn-open-modal-finish").trigger( "click" );
            }
            //Cuando pierde el usuario
            if(this.props.stateGamePlayerOne == 1){
                $("#bg-modal-finish").addClass("bg-finish-lose");
                $("#btn-open-modal-finish").trigger( "click" );
            }
        

        return (
            <div className="modal fade" id="finishGame">
             <button type="button" className="btn btn-primary" id="btn-open-modal-finish" data-toggle="modal" data-target="#finishGame"></button>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div id="bg-modal-finish" className="modal-body bg-finish">
                            
                        </div>

                        
                            <button hidden type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        

                    </div>
                </div>
            </div>
        )
    }



}