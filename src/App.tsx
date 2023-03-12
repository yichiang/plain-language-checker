import React, { useState } from 'react';
import './App.scss';
import Checker from './Components/Main/Checker';
import { FeedbackData, GeneralFeedbackData } from './Types';
import { Text } from './Parser/Parser';
import { Route, Switch } from 'react-router-dom';
import TextInput from './Components/TextInput/TextInput';
import ReportPanelList from './Components/Main/ReportPanelList';
import GeneralCommentsList from './Components/Main/GeneralCommentsList';
import { validateAbbreviationsCount, validateExampleCount, validateTransitionWordsCount } from './Parser/Validator/WordCounterValidator';

function App(): JSX.Element {
	const [specificFeedbackList, setSpecificFeedbackList] = useState<FeedbackData[]>([]);
	const [generalFeedbackList, setGeneralFeedbackList] = useState<GeneralFeedbackData[]>([]);
	const [parsedTextState, setParsedTextState] = useState<Text>();

	const onClickSubmit = (article: string) => {

		const parsedText = new Text(article);

		// console.log('Paragraph count: ' + parsedText.getParagraphsCount());
		// console.log('Sentence count: ' + parsedText.getSentencesCount());
		// console.log('Word count: ' + parsedText.getWordsCount());

		// Look for Feedback
		parsedText.parseText();
		setParsedTextState(parsedText);

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

		const list: FeedbackData[] = parsedText.getFeedback();
		setSpecificFeedbackList(list);

		// Check that examples and transition words are used
		const examplesFeedback = validateExampleCount(parsedText.getExamplesCount(), parsedText.getParagraphsCount());
		const transitionWordsFeedback = validateTransitionWordsCount(parsedText.getTransitionWordsCount(), parsedText.getParagraphsCount());
		const abbreviationsFeedback = validateAbbreviationsCount(parsedText.getAbbreviationsCount(), parsedText.getParagraphsCount());
		setGeneralFeedbackList([examplesFeedback, transitionWordsFeedback, abbreviationsFeedback]);
	};

	return (
		<div className="App">
			<div className='container'>
				<Switch>
					<Route exact path="/" component={TextInput} />
				</Switch>
				<Checker
					onClickSubmit={onClickSubmit}
				/>
				{specificFeedbackList && <ReportPanelList items={specificFeedbackList} paragraphs={parsedTextState?.getParagraphs()}/>}
				{generalFeedbackList && <GeneralCommentsList items={generalFeedbackList}/>}
			</div>
		</div>
	);
}

export default App;
