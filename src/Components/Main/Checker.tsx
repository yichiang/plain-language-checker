import React, {useState} from 'react';
import {
	TextArea,
	Button
} from '@carbon/react';
import './Checker.scss';

function Checker(): JSX.Element {


	return (
		<div>
			<h1 className='main-checker-title'>Plain Language Checker</h1>
			<TextArea
				className='checker-text-area'
				id="main-checker-text-area"
				labelText="Plain language checker TextArea"
				hideLabel
				maxCount={2000}
				cols={200}
				rows={10}
			/>
			<Button className="submit-btn">Secondary</Button>


		</div>
	);
}

export default Checker;
