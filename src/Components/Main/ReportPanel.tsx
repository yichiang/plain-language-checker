import React, {useState} from 'react';
import {
	Accordion,
	AccordionItem
} from '@carbon/react';
import './ReportPanel.scss';
import { PlainLanguageProblem, ReportType } from '../../Types';


function ReportPanel(props: ReportPanelPropsType): JSX.Element {
	const {items} = props;
	console.log(items);
	return (
		<div className='report-panel'>
			<h2>Suggestions</h2>
			<p className='subtitle'>We found {items.length} additional words</p>
			<Accordion className='report-list'>
				{items.map( (item, index) => {
					const {type, title, occurrence } = item;
					return (

						<AccordionItem 
							key={index}
							title={`${occurrence} ${title}`}>
							<p>
								{type}
							</p>
						</AccordionItem>

					);

				})}
			</Accordion>
		</div>
	);
}

type ReportPanelPropsType = {
    items: PlainLanguageProblem[]
}
export default ReportPanel;
