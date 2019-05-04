import React from 'react';
import logo from './logo.svg';
import './App.css';

import CombatArea from "./components/CombatArea/CombatArea";
import PlacePlayerTwo from "./components/PlacePlayerTwo/PlacePlayerTwo";
import LifeStatusBar from "./components/LifeStatusBar/LifeStatusBar";
import Atacks from "./components/Atacks/Atacks";
import PlacePlayerOne from "./components/PlacePlayerOne/PlacePlayerOne";
import SelectPlayer from "./components/SelectPlayer/SelectPlayer"


function App() {




  return (
    <div className="App">
    
      <SelectPlayer/>
      <div className="container-fluid cambatInit">

        <div className="container">
          <div className="row">
              <CombatArea/>
              <PlacePlayerTwo/>
          </div>        
              <LifeStatusBar/>        
          <div className="row">
              <PlacePlayerOne/>
              <Atacks/>

          </div>
        </div>
      </div>
      
    </div>
  );
}


export default App;
