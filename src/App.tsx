import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Checker from './Components/Main/Checker';
import ReportPanel from './Components/Main/ReportPanel';
import { FeedbackData } from './Types';
import { Text } from './Parser/Parser';
import { Route, Switch } from 'react-router-dom';
import TextInput from './Components/TextInput/TextInput';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ReportPanelList from './Components/Main/ReportPanelList';

function App(): JSX.Element {
	const [possibleProblemList, setPossibleProblemList] = useState<FeedbackData[]>([]);

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
	};

	return (
		<div className="App">
			<Header></Header>
			<div className='container'>
				<Switch>
					<Route exact path="/" component={TextInput} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
				<Checker
					onClickSubmit={onClickSubmit}
				/>
				{possibleProblemList && <ReportPanelList items={possibleProblemList}/>}
			</div>
		</div>
	);
}

export default App;
