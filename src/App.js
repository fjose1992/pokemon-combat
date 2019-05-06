import React, { Component } from 'react';
import './App.css';

import Routes from './routes';



class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "IMUAO - Repositorio de Ingeniria Multimedia",
      home: false
    }
  }

  render() {
    return (
      <div>
          <Routes name={this.state.appName}/>
      </div>
    );
  }
}
export default App;
