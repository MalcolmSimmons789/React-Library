import React from 'react';
import Movie from './components/movie';
import './App.css';

function App() {
	return (
		<div>
			{mvoies.map((movie) => (
				<Movie />
			))}
		</div>
	);
}

export default App;
