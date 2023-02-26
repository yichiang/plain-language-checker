import React from 'react';
import {
	UnorderedList,
	ListItem,
	Link
} from '@carbon/react';
import './ReportPanel.scss';
import { FeedbackData } from '../../Types';


function ReportPanelList(props: ReportPanelListPropsType): JSX.Element {
	const {items} = props;
	console.log(items);
	return (
		<div className='report-panel'>
			<h2>Suggestions</h2>
			<p className='subtitle'>We found {items.length} additional words</p>
			<UnorderedList className='report-list'>
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

						<ListItem key={index}>
							{ `[${feedbackType}] ${name} - ${matchedString} 
                                at paragraph ${paragraphNumber}, 
                                sentence ${sentenceNumber}`}

							<UnorderedList nested>
								<ListItem>
								Description : {description}
								</ListItem>
								<ListItem>
								Suggestions : {stringSuggestion}
								</ListItem>
								<ListItem>
								Reference : <Link href={link}>{linkText}</Link>
								</ListItem>
							</UnorderedList>
						</ListItem>

					);

				})}
			</UnorderedList>
		</div>
	);
}

type ReportPanelListPropsType = {
    items: FeedbackData[]
}
export default ReportPanelList;
