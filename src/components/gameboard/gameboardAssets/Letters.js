import React from 'react';
import { connect } from 'react-redux';

const LetterBoard = props => {
	//display * for letters until they are guessed
	const revelLetters = props.word
		? props.word.split('').map((letter, i) => {
				if (
					props.guessedLetters.includes(letter.toLowerCase()) ||
					props.guessedLetters.includes(letter.toUpperCase()) ||
					letter === ' '
				) {
					return (
						<p className="letters" key={i}>
							{letter}
						</p>
					);
				} else {
					return (
						<p className="letters" key={i}>
							*
						</p>
					);
				}
		  })
		: null;

	return <div className="letter-board">{revelLetters}</div>;
};

const mapStateToProps = state => {
	return {
		word: state.puzzle.word,
		guessedLetters: state.guessedLetters,
	};
};

export default connect(mapStateToProps)(LetterBoard);
