import React, {useState} from 'react';
import {
	Accordion,
	AccordionItem
} from '@carbon/react';
import './ReportPanel.scss';

function ReportPanel(): JSX.Element {


	return (
		<div className='report-panel'>
			<h2>Suggestions</h2>
			<p className='subtitle'>We found 2 additional words</p>
			<Accordion className='report-list'>
				<AccordionItem title="Title 1"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
				<AccordionItem title="Title 2"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
				<AccordionItem title="Title 3"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
			</Accordion>
		</div>
	);
}

export default ReportPanel;
