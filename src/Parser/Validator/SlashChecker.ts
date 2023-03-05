import { Suggestion } from '../Parser';
import { Sentence } from '../Sentence';
import { foundUrls } from './helper';

const wordList = ['and/or', 'or/and', 'w/o', '/'];
export default function reportSlashUsage(sentence: Sentence) {
	const match: string[] = [];
	const text = sentence.getText();
	wordList.forEach(word => {
		if(text.includes(word)) {
			if(word === '/') {
				const matchUrls = foundUrls(text);
				if(!matchUrls?.length) {
					match.push(word);
				}
			} else {
				match.push(word);
			}
		}
	});
	if (match.length > 1 && match[match.length-1] === '/')
	{
		// Remove slash if it was detected and we also have another match.
		match.pop();
	}

	if(match.length > 0) {
		sentence.getSuggestions().push(new Suggestion(
			'Don’t use slashes', 
			'https://www.plainlanguage.gov/guidelines/conversational/dont-use-slashes/',
			'Don’t use slashes - Plain language guidelines',
			`The sentence contains ${match.join(',')}.`,
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			`${match.join(',')}`,
			'Please consider replacing the slash with words.'
		));
	}

}

