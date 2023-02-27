import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {
	TextArea,
	Button
} from '@carbon/react';
import './Checker.scss';

function Checker(props: CheckerPropsType): JSX.Element {
	//ToDo:// remove default context after developemnt
	const [inputContent, setInputContent] = useState<string>(`The report found that people living in countries with liberal democratic governments are “more likely to worry about misinformation than people in countries without or with limited democratic institutions,” and that fake news concerns were higher among people with higher education levels.
    He was withheld while we were being fed. New regulations were proposed.	`);

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
