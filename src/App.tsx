import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Checker from './Components/Main/Checker';
import ReportPanel from './Components/Main/ReportPanel';
import { PlainLanguageProblem, ReportType } from './Types';
import { Text } from './Parser/Parser';

function App(): JSX.Element {
	const [possibleProblemList, setPossibleProblemList] = useState<PlainLanguageProblem[]>([]);

	const onClickSubmit = (article: string) => {
		console.log(article);

		const parsedText = new Text(article);

		console.log('Paragraph count: ' + parsedText.getParagraphsCount());
		console.log('Sentence count: ' + parsedText.getSentencesCount());
		console.log('Word count: ' + parsedText.getWordsCount());
		console.log('Transition words count: ' + parsedText.getTransitionWordsCount());
		console.log('Examples count: ' + parsedText.getExamplesCount());

		// // console.log("Text text: ");
		// // console.log(parsedText.getText());

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
