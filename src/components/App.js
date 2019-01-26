import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWords } from '../actions';
import './App.scss';

class App extends Component {
	keyPressEvent = e => {
		console.log(e.key);
	};

	componentDidMount() {
		window.addEventListener('keypress', this.keyPressEvent);
		this.props.fetchWords(2);
	}
	render() {
		console.log('hi');
		return (
			<div className="App">
				<h1>hi</h1>
				<div className="box">test</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		word: state.words,
	};
};

export default connect(
	mapStateToProps,
	{ fetchWords },
)(App);
