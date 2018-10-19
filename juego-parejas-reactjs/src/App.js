import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import logo from './logo.svg';
import './App.css';
import construirBaraja from './utils/construirBaraja';

const getEstadoInicial = () => {
	const baraja = construirBaraja();
	return {
		baraja
	};
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = getEstadoInicial();
	}

  render() {
    return (
      <div className="App">
        <Header />
        <Tablero 
        	baraja={this.state.baraja}
        />
      </div>
    );
  }
}

export default App;
