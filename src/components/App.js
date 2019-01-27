import React, { Component } from 'react';
import { connect } from 'react-redux';

import LetterBoard from './LetterBoard';
import { fetchWords, guessLetters } from '../actions';
import './App.scss';

class App extends Component {
	keyPressEvent = e => {
		console.log(e.key);
		this.props.guessLetters(e.key);
	};

	componentDidMount() {
		this.props.fetchWords(2);
		window.addEventListener('keypress', this.keyPressEvent);
	}
	render() {
		return (
			<div className="App">
				<LetterBoard puzzle={this.props.puzzle} />
				<div className="box">test</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		puzzle: state.puzzle,
	};
};

export default connect(
	mapStateToProps,
	{ fetchWords, guessLetters },
)(App);
