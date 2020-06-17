import React, { Component } from 'react';
import CatComponent from './CatComponent';
// named component import cs above default component import. Need to use {}
import { GraceHopperQuoteComponent } from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
