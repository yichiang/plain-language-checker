import { Suggestion } from '../Parser';
import { Sentence } from '../Sentence';

const wordList = ['and/or', 'w/o', 'w/'];
export default function reportSlashUsage(sentence: Sentence) {
	const match: string[] = [];
	wordList.forEach(word => {
		if(sentence.getText().includes(word)) {
			match.push(word);
		}
	});
	if(match.length > 0) {
		sentence.getSuggestions().push(new Suggestion(
			'Don’t use slashes', 
			'https://www.plainlanguage.gov/guidelines/conversational/dont-use-slashes/',
			'Don’t use slashes - Plain language guidelines',
			'The sentence contains and/or or w/o. Please check whether we can replace it.',
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			`${match.join(',')}`,
			`consider checking the usage of slash for ${match.join(',')}.`
		));        
	}

}