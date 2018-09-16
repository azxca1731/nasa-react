import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './container/Searchbar';
import PictureList from './container/PictureList';

class App extends Component {
	
	render() {
		return (
			<div>
				<SearchBar />
				<PictureList />
			</div>
		);
	};
}

export default App;
