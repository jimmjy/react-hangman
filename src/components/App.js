import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameBoard from './gameboard/GameBoard';
import { fetchWords, guessLetters, resetGuessedLetters, resetGuesses } from '../actions';
import './App.scss';

class App extends Component {
	keyPressEvent = e => {
		//----------- regex for a-z -------------
		if (/[a-zA-Z]/.test(e.key)) {
			this.props.guessLetters(e.key);
		}
	};

	componentDidMount() {
		//initialize the game with 2 words -------- update to give user options --------
		this.props.fetchWords(2);
		window.addEventListener('keypress', this.keyPressEvent);
	}

	newGameHandler = () => {
		this.props.fetchWords(2);
		this.props.resetGuessedLetters();
		this.props.resetGuesses();
	};

	render() {
		return (
			<div className="App">
				<h1 className="header">
					<span className="swivel">H</span>angman
				</h1>
				<div className="game-body">
					<GameBoard newGameHandler={this.newGameHandler} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		puzzle: state.puzzle,
		remainingGuesses: state.remainingGuesses,
	};
};

export default connect(
	mapStateToProps,
	{ fetchWords, guessLetters, resetGuessedLetters, resetGuesses },
)(App);
