import React from 'react';
import './App.css';
import HeaderContainer from '../Components/HeaderContainer/HeaderContainer';
import MainContainer from '../Components/MainContainer/MainContainer';

function App() {
	return (
		<div className='container-fluid'>
			<HeaderContainer />
			<MainContainer />
		</div>
	);
}

export default App;
