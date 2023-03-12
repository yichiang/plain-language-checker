import { GeneralFeedbackData } from '../../Types';

// We expect to have at least 1 example per every 3 paragrahs
const ParagraphToExampleRatio = 3;
export function validateExampleCount(exampleCount: number, paragraphCount: number): GeneralFeedbackData {
	let description = '';
	if (exampleCount === 0)
	{
		description = 'We did not find any examples in your text. Please consider adding some to increase clarity.';
	}

	const ratio = paragraphCount / exampleCount;

	if (ratio > ParagraphToExampleRatio)
	{
		description = `We detected ${exampleCount} example(s) in your text but there are ${paragraphCount} paragraph(s). Consider adding more examples to increase clarity.`;
	}
	else
	{
		description = `Way to go! We detected ${exampleCount} example(s) in your text over ${paragraphCount} paragraph(s).`;
	}

	return {
		description: description,
		link: 'https://www.plainlanguage.gov/guidelines/conversational/use-examples/',
		linkText: 'Use examples - Plain language guidelines'
	};
}

// We expect to have at least 1 transition word per every paragrah
const TransitionWordsToExampleRatio = 1;
export function validateTransitionWordsCount(transitionWordCount: number, paragraphCount: number): GeneralFeedbackData {
	let description = '';
	if (transitionWordCount === 0)
	{
		description = 'We did not find any transition words in your text. Please consider adding some to tell the audience whether the paragraph expands on the paragraph before, contrasts with it, or takes a completely different direction.';
	}

	const ratio = paragraphCount / transitionWordCount;

	if (ratio > TransitionWordsToExampleRatio)
	{
		description = `We detected ${transitionWordCount} transition words in your text but there are ${paragraphCount} paragraph(s). Consider adding more transition words to link paragraph(s).`;
	}
	else
	{
		description = `Nicely done! We detected ${transitionWordCount} transition words in your text over ${paragraphCount} paragraph(s).`;
	}

	return {
		description: description,
		link: 'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
		linkText: 'Use transition words - Plain language guidelines'
	};
}

export function validateAbbreviationsCount(abbreviationsCount: number, paragraphCount: number): GeneralFeedbackData {
	let description = '';
	if (abbreviationsCount === 0)
	{
		description = 'Well done! We did not find any abbreviations in your text.';
	}
	else if (abbreviationsCount < 4)
	{
		description = `We detected ${abbreviationsCount} abbreviations in your text over ${paragraphCount} paragraph(s). Remember to keep abbreviations to a minimum.`;
	}
	else
	{
		description = `We detected ${abbreviationsCount} abbreviations in your text over ${paragraphCount} paragraph(s). Try to limit the number of abbreviations in one document to at most three.`;
	}

	return {
		description: description,
		link: 'https://www.plainlanguage.gov/guidelines/words/minimize-abbreviations/',
		linkText: 'Minimize abbreviations - Plain language guidelines'
	};
}