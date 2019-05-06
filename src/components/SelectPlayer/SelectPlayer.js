import React, { Component } from "react";
import $ from 'jquery';

export default class SelectPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonList: []
        }

    }

    selectPokemon(event) {
        event.preventDefault();
        var pokemonSelected;
        var FormData = this.refs;
        var REF2 = Object.keys(FormData).map(function(key) {return  FormData[key] });
    
        console.log("Holaaaaa")
        REF2.map((list) => {
            console.log("List", list)
            var refInput = list.checked;
            if (refInput) {
                pokemonSelected = list.value;
            }
        });

        
        this.props.pokemonSelectedUser(pokemonSelected);
        $("#btn_close").trigger( "click" );
    }
    render() {

        var pokemonListRender = this.props.pokemonList.map((list, i) => {
            var refInput = "pokemon-" + i;
            return (<div className="form-check" key={i}>
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optradio" value={i} ref={refInput} />{list}
                </label>
            </div>

            )
        });

        return (
            <div className="modal" id="select-players">
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Selecione su Pokemon</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <form onSubmit={this.selectPokemon.bind(this)}>
                            <div className="modal-body">

                                {pokemonListRender}

                            </div>


                            <div className="modal-footer">
                            <button type="button" className="btn" hidden id="btn_close" data-dismiss="modal">Close</button>
                                <button type="submit"  className="btn btn-danger" >Play</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }



}