import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {
	TextArea,
	Button
} from '@carbon/react';
import './Checker.scss';

function Checker(props: CheckerPropsType): JSX.Element {
	//ToDo:// remove default context after developemnt
	const [inputContent, setInputContent] = useState<string>(`
	The Americans with Disabilities Act of 1990 or ADA is a civil rights law that prohibits discrimination based on disability.

	ADA is important. We need to know how the UI will look like for BLV users.


	Use this link to verify the plain language usage: https://yichiang.github.io/plain-language-checker/#/.

	The report found that people living in countries with liberal democratic governments are “more likely to worry about misinformation than people in countries without or with limited democratic institutions,” and that fake news concerns were higher among people with higher education levels. 

	He was withheld while we were being fed. New regulations were proposed.	
		
	Statistical classification is the process of assigning observations to a category or set of labels. This is a basic problem in statistics, science and artificial intelligence. For example, a self-driving car that needs to decide if a moving object is a pedestrian, car, bicycle or other entity such as leaves being blown by the wind. An algorithm that performs statistical classification is known as a classifier. However, I don't think finding these solutions means an end to all our troubles.
	
	A sailor's life is indeed a hard life.
	
	In the 1920s the renowned English scholar H.W. Fowler dismissed and/or as an “ugly device” that may be “common and convenient in some kinds of official, legal, and business documents.
	`);

	const onTextInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const target = (event as SyntheticEvent).target;
		setInputContent((target as HTMLInputElement).value);
	};

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
				value={inputContent}
				onChange={onTextInputChange}
			/>
			<Button 
				className="submit-btn"
				onClick={() => props.onClickSubmit(inputContent)}>
            Submit
			</Button>

		</div>
	);
}
type CheckerPropsType = {
    onClickSubmit:  (inputValue: string) => void;
}
export default Checker;
