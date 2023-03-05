import { syllable } from 'syllable';
import { Suggestion } from '../Parser';
import { Sentence } from '../Sentence';

const highCount = 5;
export default function reportSyllableHighCount(sentence: Sentence, checkForBy = false) {
	const issues: {word: string, count: number}[] = [];
	sentence.getWords().forEach(word => {
		const count = syllable(word);
		if(count >= highCount) {
			issues.push({word: word, count: count});
		}
	});
	const words = issues.map(issue=> `${issue.word}`);
	const wordList = words.join(',');
	console.log(wordList);
	if(issues.length > 0) {
		sentence.getSuggestions().push(new Suggestion(
			'Use simple words and phrases', 
			'https://www.plainlanguage.gov/guidelines/words/use-simple-words-phrases/',
			'Use simple words and phrases - Plain language guidelines',
			`The sentence contains ${wordList} with high syllable count. Please consider to change if the word might be complicated.`,
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			wordList || '',
			`consider replacing "${wordList}" with simple word`
		));        
	}

}
