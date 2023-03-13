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
	const {items, searchMatchedString} = props;
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
					const matchedString = paragraphs ? paragraphs[paragraphNumber - 1].getSentences()[sentenceNumber - 1].getText() : '';
					return (
						<ListItem key={2*index} style={{marginBottom: '20px'}}>
							<Link
								onClick={() => {
									searchMatchedString(matchedString);
								}}
							>
								<strong> Paragraph {paragraphNumber}, sentence {sentenceNumber}: </strong>
							</Link>
							<p>
								<em>{matchedString}</em>
							</p>
							{items.map( (item, index) => {
								const {name,
									matchedString,
									trueMatchedString,
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
											<Link
												onClick={() => {
													searchMatchedString(trueMatchedString);
												}}
											>
												<strong><em>{matchedString}</em></strong>
											</Link>
		

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
										</ListItem>

									</UnorderedList>
								);})}
						</ListItem>
					);
				})}
			</UnorderedList>
		</div>
	);
}

interface ReportPanelListPropsType {
	items: FeedbackData[];
	paragraphs: Paragraph[] | undefined;
	searchMatchedString: (matchedString: string) => void;
}
export default ReportPanelList;
