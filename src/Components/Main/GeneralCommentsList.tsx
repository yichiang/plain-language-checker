import React from 'react';
import {
	UnorderedList,
	ListItem
} from '@carbon/react';
import './ReportPanel.scss';

function GeneralCommentsList(props: GeneralCommentsListPropsType): JSX.Element {
	const {items} = props;
	return (
		<div className='general-comments'>
			<h2>General comments</h2>
			<UnorderedList className='report-unordered-list'>
				{items.map( (item, index) => {
					return (
						<ListItem key={index}>
							{item}
						</ListItem>
					);
				})}
			</UnorderedList>
		</div>
	);
}

type GeneralCommentsListPropsType = {
    items: string[]
}
export default GeneralCommentsList;
