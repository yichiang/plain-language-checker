import React from 'react';
import {
	UnorderedList,
	ListItem,
	Link
} from '@carbon/react';
import './ReportPanel.scss';
import { GeneralFeedbackData } from '../../Types';

function GeneralCommentsList(props: GeneralCommentsListPropsType): JSX.Element {
	const {items} = props;
	return (
		<div className='general-comments'>
			<h2>General comments</h2>
			<UnorderedList className='report-unordered-list'>
				{items.map( (item, index) => {
					const {
						link,
						linkText,
						description
					} = item;
					return (
						<ListItem key={index}>
							{description} Reference : <Link href={link}>{linkText}</Link>
						</ListItem>
					);
				})}
			</UnorderedList>
		</div>
	);
}

type GeneralCommentsListPropsType = {
    items: GeneralFeedbackData[]
}
export default GeneralCommentsList;
