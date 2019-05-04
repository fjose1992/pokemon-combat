import React, { Component } from "react";

export default class SelectPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photoURL: ""
        }

    }


    render() {

        return (
            <div className="modal" id="select-players">
                <div className="modal-dialog">
                <div className="modal-content">
                
                    
                    <div className="modal-header">
                    <h4 className="modal-title">Selecione su Pokemon</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    
                    <div className="modal-body">
                    Modal body..
                    </div>
                    

                    <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Play</button>
                    </div>
                    
                </div>
                </div>
            </div>
        )
    }



}