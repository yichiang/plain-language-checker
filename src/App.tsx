import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Checker from './Components/Main/Checker';
import ReportPanel from './Components/Main/ReportPanel';

function App(): JSX.Element {

	return (
		<div className="App">
			<Header></Header>
			<div className='container'>
				<Checker></Checker>
				<ReportPanel></ReportPanel>
			</div>
		</div>
	);
}

export default App;
