import { syllable } from 'syllable';
import { Suggestion } from '../Parser';
import { Sentence } from '../Sentence';
import { foundUrls } from './helper';
import { commonWords } from './CommonWords';

const highCount = 5;
export default function reportSyllableHighCount(sentence: Sentence) {
	const issues: {word: string, count: number}[] = [];
	sentence.getWords().forEach(word => {
		if (!commonWords.has(word.toLowerCase().replace(/[^\w-]/g,'')))
		{
			const count = syllable(word);
			const matchUrls = foundUrls(word);
			if((!matchUrls?.length) && count >= highCount) {
				issues.push({word: word, count: count});
			}
		}
	});
	const words = issues.map(issue=> `${issue.word}`);
	const wordList = words.join(', ');
	if(issues.length > 0) {
		sentence.getSuggestions().push(new Suggestion(
			'Use simple words and phrases', 
			'https://www.plainlanguage.gov/guidelines/words/use-simple-words-phrases/',
			'Use simple words and phrases - Plain language guidelines',
			`The sentence contains the following uncommon, high-syllable words: ${wordList}.`,
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			wordList || '',
			wordList || '',
			`Please consider replacing "${wordList}" with simpler words.`
		));        
	}

}
