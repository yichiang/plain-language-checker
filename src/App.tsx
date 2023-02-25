import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Checker from './Components/Main/Checker';
import ReportPanel from './Components/Main/ReportPanel';
import { PlainLanguageProblem, ReportType } from './Types';

function App(): JSX.Element {
	const [possibleProblemList, setPossibleProblemList] = useState<PlainLanguageProblem[]>([]);

	const onClickSubmit = (article: string) => {
		console.log(article);
		//ToDo: run plain language checker
		let list: PlainLanguageProblem[] = [
			{
				type: ReportType.niceToHave,
				title: 'Use Transistion Words', 
				occurrence: 10	
			},
			{
				type: ReportType.warning,
				title: 'Use Positive Words', 
				occurrence: 5	
			},
			{
				type: ReportType.error,
				title: 'Use Abbreviation', 
				occurrence: 2	
			}


		];
		list = list.sort(item => item.occurrence);
		setPossibleProblemList(list);
	};

	return (
		<div className="App">
			<Header></Header>
			<div className='container'>
				<Checker
					onClickSubmit={onClickSubmit}
				/>
				{possibleProblemList && <ReportPanel items={possibleProblemList}/>}
			</div>
		</div>
	);
}

export default App;
