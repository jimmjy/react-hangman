import React from 'react';
import { connect } from 'react-redux';

import Letters from './gameboardAssets/Letters';
import RemainingGuesses from './gameboardAssets/RemainingGuesses';

const GameBoard = props => {
	const playing =
		//display inplay letters and remaining guesses
		props.remainingGuesses > 0 ? (
			<div className="game">
				<Letters />
				<RemainingGuesses />
			</div>
		) : (
			//display game over
			<div className="game-over">
				<h1>The answer was: {props.word}</h1>
				<h1>Game Over, try again</h1>
				<button className="btn" onClick={props.newGameHandler}>
					New Game
				</button>
			</div>
		);

	//check if user guessed all the letters in puzzle word
	const filter = props.word
		? props.word.split('').filter(letter => {
				return (
					!props.guessedLetters.includes(letter.toLowerCase()) &&
					!props.guessedLetters.includes(letter.toUpperCase()) &&
					letter !== ' '
				);
		  })
		: null;

	//changes ui based on if the user has won or not
	return filter !== null && filter.length > 0 ? (
		//display current game playing if user hasn't guessed all the letters
		playing
	) : (
		//display the user has won
		<div className="game-won">
			<h1>You won!!</h1>{' '}
			<button className="btn" onClick={props.newGameHandler}>
				New Game
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		word: state.puzzle.word,
		remainingGuesses: state.remainingGuesses,
		guessedLetters: state.guessedLetters,
	};
};

export default connect(mapStateToProps)(GameBoard);
