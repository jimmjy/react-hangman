import React, { Component } from 'react';

import './App.scss';

class App extends Component {
	keyPressEvent = e => {
		console.log(e.key);
	};

	componentDidMount() {
		window.addEventListener('keypress', this.keyPressEvent);
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

export default App;
