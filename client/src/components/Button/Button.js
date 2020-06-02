import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
	state = {
		clicked: false
	}

	render() {
		return (
			<div className={styles.Button} style={{backgroundColor: {props.color}}}>{props.content}</div>
		);
	}
}