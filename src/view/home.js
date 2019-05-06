import React, { Component } from "react";
import axios from 'axios'

import CombatArea from "../components/CombatArea/CombatArea";
import PlacePlayerTwo from "../components/PlacePlayerTwo/PlacePlayerTwo";
import LifeStatusBar from "../components/LifeStatusBar/LifeStatusBar";
import Atacks from "../components/Atacks/Atacks";
import PlacePlayerOne from "../components/PlacePlayerOne/PlacePlayerOne";
import SelectPlayer from "../components/SelectPlayer/SelectPlayer"



export default class home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            allData: [],
            pokemonList: [],
            indexPlayerOne: 0,
            indexPlayerTwo: 0,
            imagePlayerOne: "",
            imagePlayerTwo: "",
            actacksPlayerOne: [],
            actacksPlayerTwo: [], 
            imageAtack: "https://backgrounddownload.com/wp-content/uploads/2018/09/pokemon-arena-background-3.png"        
        };
        this.pokemonSelectedUser = this.pokemonSelectedUser.bind(this);
        this.deployAtack = this.deployAtack.bind(this);
        
    }


    /**
     * En este metodo se ejeuta el llamado al WebService
     */
    componentWillMount() {        
        var th = this;
        var responseData = axios.get('http://www.mocky.io/v2/5ccdd0fc2e0000d623182b1b');
        responseData.then(function (value){
            th.setState({allData: value.data})            
            th.set_pokemon_name_list();
        });                
    }

    /**
     * Se Encarga de actualizar el estado de la variable pokemonList
     */
    set_pokemon_name_list(){  
        var pokemonList_tmp = new Array();             
        pokemonList_tmp = this.state.allData.map(function (value){                       
            return value.stName;
        });        
        this.setState({pokemonList: pokemonList_tmp});
    }

    /**
     * @param {Indice del pokemon seleccionado} indexPlayerOne 
     */
    pokemonSelectedUser = (indexPlayerOne) => {
       
       var allDataPokemon = this.state.allData;
       var indexPlayerTwo = this.get_randonMachinePlayer(indexPlayerOne, allDataPokemon.length);
       
       //Filtrando la data para el pokemon seleccioando por el usuario
       var dataPlayerOne = allDataPokemon[indexPlayerOne];
       var dataPlayerTwo = allDataPokemon[indexPlayerTwo];

       //Asigando la imagen del pokemon seleccionado por la maquina y el usuario
       this.setState({imagePlayerOne: dataPlayerOne.urlImg, imagePlayerTwo: dataPlayerTwo.urlImg});

       //Asignando la lista de poderes a cada pokemon selecionado 
       this.setState({actacksPlayerOne:dataPlayerOne.arAtacks, actacksPlayerTwo: dataPlayerTwo.arAtacks});
    }


    /**
     * Funcion recursiva para generar el indexData del jugador de la maquina
     * @param {El indexData ya selecionado por el jugador} noIndex 
     * @param {El tamano maxino de pokemones disponibles} maxRandom 
     */
    get_randonMachinePlayer(noIndex, maxRandom) {    
       
        var randPlayerTwo = Math.floor((Math.random() * maxRandom) );        
        return (randPlayerTwo == noIndex) ? this.get_randonMachinePlayer(noIndex, maxRandom) : randPlayerTwo;
    }

    deployAtack = (nuAtckPower, imgAtack) => {
        //Asigna la animacion del ataque selecionado
        console.log("Atack", nuAtckPower, imgAtack)
        this.setState({imageAtack:imgAtack});
    }
    render() {
        
        return (
            <div className="App">

                <SelectPlayer pokemonList = {this.state.pokemonList} pokemonSelectedUser={this.pokemonSelectedUser} />
                <div className="container-fluid cambatInit">

                    <div className="container">
                        <div className="row">
                            <CombatArea imageAtack={this.state.imageAtack}/>
                            <PlacePlayerTwo imagePlayerTwo={this.state.imagePlayerTwo} />
                        </div>
                        <LifeStatusBar />
                        <div className="row">
                            <PlacePlayerOne  imagePlayerOne= {this.state.imagePlayerOne}/>
                            <Atacks atacks={this.state.actacksPlayerOne} deployAtack={this.deployAtack} />

                        </div>
                    </div>
                </div>

            </div>
        );
    }


}
