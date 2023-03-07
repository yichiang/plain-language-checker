import React from 'react';
import {
	UnorderedList,
	ListItem,
	Link
} from '@carbon/react';
import './ReportPanel.scss';
import { FeedbackData } from '../../Types';
import { Paragraph } from '../../Parser/Paragraph';

function ReportPanelList(props: ReportPanelListPropsType): JSX.Element {
	const {items} = props;
	console.log(items);
	const {paragraphs} = props;
	return (
		<div className='report-panel'>
			<h2>Specific comments</h2>
			<p className='subtitle'>We found {items.length} Feedback items</p>
			<UnorderedList className='report-unordered-list'>
				{items.map( (item, index) => {
					const {name, 
						matchedString,
						paragraphNumber,
						sentenceNumber,
						stringSuggestion, 
						description,
						feedbackType,
						link,
						linkText
					} = item;
					return (
						<>
							{paragraphs && !paragraphs[paragraphNumber-1].getSentences()[sentenceNumber-1].getHasBeenPrinted() && <ListItem key={2*index}>
								<strong> Paragraph {paragraphNumber}, sentence {sentenceNumber}: </strong> {paragraphs && paragraphs[paragraphNumber-1].getSentences()[sentenceNumber-1].getText()}
							</ListItem>}
							{ paragraphs && paragraphs[paragraphNumber-1].getSentences()[sentenceNumber-1].markPrinted() }

							<ListItem key={2*index+1}>
								[{feedbackType}] {name}
								<strong> {matchedString} </strong>
								<UnorderedList nested>
									<ListItem>
									Description : {description}
									</ListItem>
									{stringSuggestion && <ListItem>
									Suggestions : {stringSuggestion}
									</ListItem>}
									<ListItem>
									Reference : <Link href={link}>{linkText}</Link>
									</ListItem>
								</UnorderedList>
							</ListItem>
						</>

					);

				})}
			</UnorderedList>
		</div>
	);
}

type ReportPanelListPropsType = {
    items: FeedbackData[],
	paragraphs: Paragraph[] | undefined
}
export default ReportPanelList;
