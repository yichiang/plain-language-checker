import React, {useState} from 'react';
import './App.scss';
import Checker from './Components/Main/Checker';
import { FeedbackData, GeneralFeedbackData } from './Types';
import { Text } from './Parser/Parser';
import { Route, Switch } from 'react-router-dom';
import ReportPanelList from './Components/Main/ReportPanelList';
import GeneralCommentsList from './Components/Main/GeneralCommentsList';
import { validateAbbreviationsCount, validateExampleCount, validateTransitionWordsCount } from './Parser/Validator/WordCounterValidator';

function App(): JSX.Element {
	const [specificFeedbackList, setSpecificFeedbackList] = useState<FeedbackData[]>([]);
	const [generalFeedbackList, setGeneralFeedbackList] = useState<GeneralFeedbackData[]>([]);
	const [parsedTextState, setParsedTextState] = useState<Text>();

	const onClickSubmit = (article: string) => {
		const parsedText = new Text(article);

		// Look for Feedback
		parsedText.parseText();
		setParsedTextState(parsedText);

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
					<Route exact path="/"/>
					<Route path="/input-text#"/>
				</Switch>
				<Checker
					onClickSubmit={onClickSubmit}
				/>
				{
					specificFeedbackList &&
					<ReportPanelList
						items={specificFeedbackList}
						paragraphs={parsedTextState?.getParagraphs()}
					/>
				}
				{generalFeedbackList && <GeneralCommentsList items={generalFeedbackList}/>}
			</div>
		</div>
	);
}

export default App;
