import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Checker from './Components/Main/Checker';
import { FeedbackData } from './Types';
import { Text } from './Parser/Parser';
import { Route, Switch } from 'react-router-dom';
import TextInput from './Components/TextInput/TextInput';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ReportPanelList from './Components/Main/ReportPanelList';
import GeneralCommentsList from './Components/Main/GeneralCommentsList';
import { validateExampleCount, validateTransitionWordsCount } from './Parser/Validator/WordCounterValidator';

function App(): JSX.Element {
	const [possibleProblemList, setPossibleProblemList] = useState<FeedbackData[]>([]);
	const [possibleSuggestionList, setPossibleSuggestionList] = useState<string[]>([]);

	const onClickSubmit = (article: string) => {

		const parsedText = new Text(article);

		// console.log('Paragraph count: ' + parsedText.getParagraphsCount());
		// console.log('Sentence count: ' + parsedText.getSentencesCount());
		// console.log('Word count: ' + parsedText.getWordsCount());

		// Look for Feedback
		parsedText.parseText();

		// console.log('Issues count: ' + parsedText.getIssuesCount());
		// console.log('Suggestions count: ' + parsedText.getSuggestionsCount());
		// console.log('Kudos count: ' + parsedText.getKudosCount());
		// console.log('Transition words count: ' + parsedText.getTransitionWordsCount());
		// console.log('Examples count: ' + parsedText.getExamplesCount());

		// console.log('---------- Issues ----------');
		// console.log(parsedText.getIssues());
		// console.log('---------- Suggestions ----------');
		// console.log(parsedText.getSuggestions());
		// console.log('---------- Kudos ----------');
		// console.log(parsedText.getKudos());

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

		// Check that examples and transition words are used
		const examplesString = validateExampleCount(parsedText.getExamplesCount(), parsedText.getParagraphsCount());
		const transitionWordsString = validateTransitionWordsCount(parsedText.getTransitionWordsCount(), parsedText.getParagraphsCount());
		setPossibleSuggestionList([examplesString, transitionWordsString]);
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
				{possibleSuggestionList && <GeneralCommentsList items={possibleSuggestionList}/>}
			</div>
		</div>
	);
}

export default App;
