import React from 'react';

const LetterBoard = props => {
	return (
		<div className="letter-board">
			{props.puzzle.word ? (
				props.puzzle.word.split('').map(letter => {
					return <p className="letters">{letter}</p>;
				})
			) : (
				<p>{'Loading...'}</p>
			)}
		</div>
	);
};

export default LetterBoard;
