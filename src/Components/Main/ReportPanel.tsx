import React, {useState} from 'react';
import {
	Accordion,
	AccordionItem
} from '@carbon/react';
import './ReportPanel.scss';
import { FeedbackData, FeedbackType } from '../../Types';


function ReportPanel(props: ReportPanelPropsType): JSX.Element {
	const {items} = props;
	console.log(items);
	return (
		<div className='report-panel'>
			<h2>Suggestions</h2>
			<p className='subtitle'>We found {items.length} feedback items.</p>
			<Accordion className='report-list'>
				{items.map( (item, index) => {
					const {name, feedbackType, link, linkText, description, matchedString, stringSuggestion, paragraphNumber, sentenceNumber } = item;
					return (

						<AccordionItem 
							key={index}
							title={`${feedbackType}: ${name}`}>
							<p>
								{ `Location: Paragraph ${paragraphNumber}, Sentence ${sentenceNumber}` }
							</p>
							<p>
								{ `Description: ${description}` }
							</p>
							<p>
								{ `More information at <a href="${link}">${linkText}</a>` }
							</p>
							<p>
								{ `Matched word(s): ${matchedString}` }
							</p>
							<p>
								{ `Suggestion: ${stringSuggestion}` }
							</p>
						</AccordionItem>

					);

				})}
			</Accordion>
		</div>
	);
}

type ReportPanelPropsType = {
    items: FeedbackData[]
}
export default ReportPanel;
