import React from 'react';
import { connect } from 'react-redux';

const LetterBoard = props => {
	let wordLetter = (i, letter, style) => {
		return (
			<p className={`${style}`} key={i}>
				{letter}
			</p>
		);
	};

	//display * for letters until they are guessed
	const revelLetters = props.word
		? props.word.split('').map((letter, i) => {
				if (
					props.guessedLetters.includes(letter.toLowerCase()) ||
					props.guessedLetters.includes(letter.toUpperCase())
				) {
					return wordLetter(i, letter, 'letters');
				} else if (letter === ' ') {
					return wordLetter(i, letter, 'space');
				} else {
					return wordLetter(i, '*', 'letters');
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
