import React, { Component } from 'react'; import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<header>
				<div class="titulo">React-Parejas</div>
				<div>
					<button class="boton-reiniciar">
						Reiniciar
					</button>
				</div>
				<div class="titulo">
					Intentos: 
				</div>
			</header>
		);
	}
};