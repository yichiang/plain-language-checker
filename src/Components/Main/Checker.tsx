import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {
	TextArea,
	Button
} from '@carbon/react';
import './Checker.scss';

function Checker(props: CheckerPropsType): JSX.Element {
	const [inputContent, setInputContent] = useState<string>('');

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
