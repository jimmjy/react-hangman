import React, { Component } from 'react';
import { connect } from 'react-redux';

import LetterBoard from './LetterBoard';
import RemainingGuesses from './RemainingGuesses';
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
		const playing =
			//display inplay letters and remaining guesses
			this.props.remainingGuesses > 0 ? (
				<div className="game">
					<LetterBoard />
					<RemainingGuesses />
				</div>
			) : (
				//display game over
				<div className="game-over">
					<h1>Game Over, try again :(</h1>
					<button onClick={this.newGameHandler}>New Game</button>
				</div>
			);

		return (
			<div className="App">
				<div className="box">test</div>
				{playing}
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
