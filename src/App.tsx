import React, {useState, useEffect} from 'react';
import './App.scss';
import Checker from './Components/Main/Checker';
import { FeedbackData, GeneralFeedbackData } from './Types';
import { Text } from './Parser/Parser';
import { Route, Switch } from 'react-router-dom';
import ReportPanelList from './Components/Main/ReportPanelList';
import GeneralCommentsList from './Components/Main/GeneralCommentsList';
import { validateAbbreviationsCount, validateExampleCount, validateTransitionWordsCount } from './Parser/Validator/WordCounterValidator';
import Highlighter from 'react-highlight-words';

function App(): JSX.Element {
	const [specificFeedbackList, setSpecificFeedbackList] = useState<FeedbackData[]>([]);
	const [generalFeedbackList, setGeneralFeedbackList] = useState<GeneralFeedbackData[]>([]);
	const [parsedTextState, setParsedTextState] = useState<Text>();
	const [text, setText] = useState<string>('');
	const [searchWords, setSearchWords] = useState<string[] | RegExp[]>(['']);
	const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>();

	useEffect(() => {
		setAnchorTarget(document.getElementById('input-text'));
	});

	const onClickSubmit = (article: string) => {
		setSearchWords(['']);
		setText(article);
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

	function escapeRegExp(string: string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function searchMatchedString(matchedString: string): void {
		setSearchWords([new RegExp(`\\b${escapeRegExp(matchedString)}\\b`)]);
		if (anchorTarget) {
			anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	return (
		<div className="App">
			<div className='container'>
				<Switch>
					<Route exact path="/" />
					<Route path="/input-text#"/>
				</Switch>
				<Checker
					onClickSubmit={onClickSubmit}
				/>
				<section id="input-text">
					<div className='highlighter'>
						<h2 className={'input-text'}>Input Text</h2>
						<Highlighter
							highlightClassName="YourHighlightClass"
							searchWords={searchWords}
							autoEscape={false}
							textToHighlight={text}
						/>
					</div>
				</section>
				{
					specificFeedbackList &&
					<ReportPanelList
						items={specificFeedbackList}
						paragraphs={parsedTextState?.getParagraphs()}
						searchMatchedString={searchMatchedString}
					/>
				}
				{generalFeedbackList && <GeneralCommentsList items={generalFeedbackList}/>}
			</div>
		</div>
	);
}

export default App;
