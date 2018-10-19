import React, { Component } from 'react';
import Carta from './Carta';
import './Tablero.css';

export default class Tablero extends Component {
	render() {
		return (
		<div class="tablero">
			{
				this.props.baraja
					.map((carta) => <Carta icono={carta.icono}/>)
			}
		</div>
		);
	}
};