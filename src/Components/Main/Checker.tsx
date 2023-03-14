import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {
	TextArea,
	Button
} from '@carbon/react';
import './Checker.scss';

function Checker(props: CheckerPropsType): JSX.Element {
	const { onClickSubmit } = props;
	const [inputContent, setInputContent] = useState<string>('');
	const onTextInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const target = (event as SyntheticEvent).target;
		setInputContent((target as HTMLInputElement).value);
	};

	function onClick() {
		onClickSubmit(inputContent);
	}

	return (
		<div className={'space-margin-bottom'}>
			<h1 className='main-checker-title'>Plain Language Checker</h1>
			<TextArea
				className='checker-text-area'
				id="main-checker-text-area"
				labelText="Please enter the article you want to check"
				enableCounter
				maxCount={2000}
				cols={200}
				rows={10}
				value={inputContent}
				onChange={onTextInputChange}
			/>
			<Button 
				className="submit-btn"
				disabled={inputContent === ''}
				onClick={onClick}
			>
				Submit
			</Button>
		</div>
	);
}
type CheckerPropsType = {
	onClickSubmit: (inputValue: string) => void;
}

export default Checker;
