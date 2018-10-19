import React, { Component } from 'react';
import './Carta.css';

export default class Carta extends Component {
	render() {
		return (
		<div className="carta">
			<i className={`fa ${this.props.icono} fa-5x`}></i>
		</div>
		)
	}
};