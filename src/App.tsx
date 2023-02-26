import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Checker from './Components/Main/Checker';
import ReportPanel from './Components/Main/ReportPanel';
import { FeedbackData } from './Types';
import { Text } from './Parser/Parser';

function App(): JSX.Element {
	const [possibleProblemList, setPossibleProblemList] = useState<FeedbackData[]>([]);
	const [submitted, setSubmitted]= useState<boolean>(false);
	const onClickSubmit = (article: string) => {
		console.log(article);

		const parsedText = new Text(article);

		console.log('Paragraph count: ' + parsedText.getParagraphsCount());
		console.log('Sentence count: ' + parsedText.getSentencesCount());
		console.log('Word count: ' + parsedText.getWordsCount());
		console.log('Transition words count: ' + parsedText.getTransitionWordsCount());
		console.log('Examples count: ' + parsedText.getExamplesCount());

		// Look for Feedback
		parsedText.parseText();

		console.log('Issues count: ' + parsedText.getIssuesCount());
		console.log('Suggestions count: ' + parsedText.getSuggestionsCount());
		console.log('Kudos count: ' + parsedText.getKudosCount());

		console.log('---------- Issues ----------');
		console.log(parsedText.getIssues());
		console.log('---------- Suggestions ----------');
		console.log(parsedText.getSuggestions());
		console.log('---------- Kudos ----------');
		console.log(parsedText.getKudos());

		const list: FeedbackData[] = [];
		for (const issue of parsedText.getIssues())
		{
			list.push(issue.getData());
		}
		for (const suggestion of parsedText.getSuggestions())
		{
			list.push(suggestion.getData());
		}
		for (const kudo of parsedText.getKudos())
		{
			list.push(kudo.getData());
		}
		setPossibleProblemList(list);
		setSubmitted(true);
	};

	return (
		<div className="App">
			<Header></Header>
			<div className='container'>
				<Checker
					onClickSubmit={onClickSubmit}
				/>
				{
					submitted && possibleProblemList &&
						<ReportPanel items={possibleProblemList}/>		
				}
			</div>
		</div>
	);
}

export default App;
