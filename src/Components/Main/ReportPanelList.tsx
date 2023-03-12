import React from 'react';
import {
	UnorderedList,
	ListItem,
	Link
} from '@carbon/react';
import './ReportPanel.scss';
import { FeedbackData } from '../../Types';
import { Paragraph } from '../../Parser/Paragraph';
import { groupBy } from '../../Parser/Validator/helper';

function ReportPanelList(props: ReportPanelListPropsType): JSX.Element {
	const {items} = props;
	const {paragraphs} = props;
	const keyItems = items.map( item => {
		item.key = item.paragraphNumber +'-'+ item.sentenceNumber;
		return item;
	});
	const groupByParagraphAndSetenceItems = groupBy(keyItems, 'key' );
	return (
		<div className='report-panel'>
			<h2>Specific comments</h2>
			<p className='subtitle'>We found {items.length} feedback items.</p>
			<UnorderedList className='report-unordered-list'>
				{Object.keys(groupByParagraphAndSetenceItems).map( (key, index) => {
					const items: FeedbackData[] = groupByParagraphAndSetenceItems[key];
					const {paragraphNumber,
						sentenceNumber
					} = items[0];
					return (

						<ListItem key={2*index} style={{marginBottom: '20px'}}>
			

							<p><strong> Paragraph {paragraphNumber}, sentence {sentenceNumber}: </strong> 
								{paragraphs && paragraphs[paragraphNumber-1].getSentences()[sentenceNumber-1].getText()}
							</p>
							{items.map( (item, index) => {
								const {name, 
									matchedString,
									stringSuggestion, 
									description,
									feedbackType,
									link,
									linkText
								} = item;
								return (
									<UnorderedList key={2*index+1} nested style={{marginTop: '10px'}}>
										<ListItem>
										[{feedbackType}] {name && <>{name}: </>} 
											<strong> {matchedString} </strong>
										</ListItem>

										<UnorderedList nested style={{marginTop: '5px'}}>
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
									</UnorderedList>
								);})}

						</ListItem>
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
