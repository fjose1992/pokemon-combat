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
            imageAtack: "https://backgrounddownload.com/wp-content/uploads/2018/09/pokemon-arena-background-3.png",
            lifeStatusBarOne: 100,
            lifeStatusBarTwo: 100,
            namePlayerOne: "",
            namePlayerTwo: "",
            defendingPlayerOne:0,
            defendingPlayerTwo: 0
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

       console.log("DATA", dataPlayerTwo);
       this.setState({
           indexPlayerOne: indexPlayerOne,
           indexPlayerTwo: indexPlayerTwo,
            //Asigando la imagen del pokemon seleccionado por la maquina y el usuario
           imagePlayerOne: dataPlayerOne.urlImg, 
           imagePlayerTwo: dataPlayerTwo.urlImg,
           //Asignando la lista de poderes a cada pokemon selecionado 
           actacksPlayerOne:dataPlayerOne.arAtacks, 
           actacksPlayerTwo: dataPlayerTwo.arAtacks,
           //Asignando datos basicos
           namePlayerOne: dataPlayerOne.stName,
           namePlayerTwo: dataPlayerTwo.stName,

           defendingPlayerOne: dataPlayerOne.nuDf,
           defendingPlayerTwo: dataPlayerTwo.nuDf,         
        });


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

    /**
     * @param {Valor de poder lanzado} nuAtckPower 
     * @param {Animacion del poder lanzado} imgAtack 
     */
    deployAtack = (nuAtckPower, imgAtack) => {
        

       //----CUANDO ATACA EL USUARIO----\\
       var lifePlayerTwo_tmp = this.state.lifeStatusBarTwo;
       if(nuAtckPower > this.state.defendingPlayerTwo){
          lifePlayerTwo_tmp = this.state.lifeStatusBarTwo - (nuAtckPower - this.state.defendingPlayerTwo);//Quita los puntos de vida cuando ataca el usuario
        }
        
        this.setState({
            imageAtack: imgAtack, //Asigna la animacion del ataque selecionado   
            lifeStatusBarTwo: lifePlayerTwo_tmp, //Valor para quitae puntos de vida al opente.
        });

        //----CUANDO ATACA LA MAQUINA----\\
        var dataAtackPlayerTwo = this.selectRandomAtack();        
        
        var lifePlayerOne_tmp = this.state.lifeStatusBarOne;
        if(dataAtackPlayerTwo['nuAtckPower'] > this.state.defendingPlayerOne){
             lifePlayerOne_tmp = this.state.lifeStatusBarOne - (dataAtackPlayerTwo['nuAtckPower'] - this.state.defendingPlayerOne);
        }
        console.log("ATACK 2", dataAtackPlayerTwo);


        setTimeout(
            function() {
                this.setState({
                    imageAtack: dataAtackPlayerTwo['imgAtck'], //Asigna la animacion del ataque selecionado   
                    lifeStatusBarOne: lifePlayerOne_tmp, //Valor para quitae puntos de vida al opente.
                });
            }
            .bind(this),
            3000
        );
         

    }

    atackMachine(){

    }
    /**
     * Se encarga de selecionar un ataque al azar 
     */
    selectRandomAtack(){
        var allDataPokemon = this.state.allData; //Trae la data del web service ya alcenada en el State
        var dataPlayerTwo = allDataPokemon[this.state.indexPlayerTwo];//Filtra la data por el indice del player Two
        var arAtacks = dataPlayerTwo.arAtacks;//Seleciona el array de ataques
        
        var randomIdex = Math.floor((Math.random() * 4) ); // Busca un indice ramdon para selecionar el ataque
        
        var dataAtackPlayerTwo = new Array();
        dataAtackPlayerTwo['nuAtckPower'] = arAtacks[randomIdex].nuAtckPower; // Seleciona el valor del atque
        dataAtackPlayerTwo['imgAtck'] = arAtacks[randomIdex].imgAtck; //Seleciona la animacion del ataque

        
        return dataAtackPlayerTwo;

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
                        <LifeStatusBar namePlayerOne={this.state.namePlayerOne} namePlayerTwo={this.state.namePlayerTwo} lifeStatusBarOne={this.state.lifeStatusBarOne} lifeStatusBarTwo={this.state.lifeStatusBarTwo} />
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
