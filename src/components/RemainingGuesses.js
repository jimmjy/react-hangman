import React from 'react';
import { connect } from 'react-redux';

const RemainingGuesses = props => {
	return (
		<div>
			<p>Remaining Guesses: {props.guesses}</p>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		guesses: state.remainingGuesses,
	};
};

export default connect(mapStateToProps)(RemainingGuesses);
