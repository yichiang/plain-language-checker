import React from 'react';
import {
	Accordion,
	AccordionItem
} from '@carbon/react';
import './ReportPanel.scss';
import { FeedbackData } from '../../Types';


function ReportPanel(props: ReportPanelPropsType): JSX.Element {
	const {items} = props;
	console.log(items);
	return (
		<div className='report-panel'>
			<h2>Suggestions</h2>
			<p className='subtitle'>We found {items.length} feedback items.</p>
			<Accordion className='report-list'>
				{items.map( (item, index) => {
					const {name, 
						matchedString,
						paragraphNumber,
						sentenceNumber,
						stringSuggestion, 
						description } = item;
					return (

						<AccordionItem 
							key={index}
							title={
								`${name} - ${matchedString} 
                                at paragraph ${paragraphNumber}, 
                                sentence ${sentenceNumber}`}>
							<p>
								{description}

								{stringSuggestion}
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
