import { Kudo, Suggestion } from '../Parser';
import { Sentence } from '../Sentence';
export type strObj = {[key:string]:string}

export default function reportAbbreviation(
	sentence: Sentence,	abbreviationDefs: strObj) {
	const uppercaseWords: strObj = {};
	// Process each sentence, looking for Feedback
	sentence.getWords().forEach( (word: string) => {
		// First, remove parenthesis
		word = word.replace(/\(+/, '').replace(/\)+/, '');
		// Check for all caps
		if(!abbreviationDefs[word] && word.length > 1 &&
            word.toUpperCase() === word 
        && !/\d/.test(word)) {
           
			if (!uppercaseWords[word] && !abbreviationDefs[word]) {
				/* eslint-disable no-useless-escape */
				const endRegexStr = '(\\s|\\-)((with|of|and|for|the|or)+\\s)*';
				const regexExpressions = word.split('').map((char, index) => {
					let str = '('+char+'\\w+)';
					if(index !== word.length-1){
						str+=endRegexStr;
					}
					return str;
				}).join('');
				const reg = new RegExp(regexExpressions, 'g');
				// try to find the definitions
				const findDefinition = sentence.getText().match(reg);
				if(!findDefinition && !abbreviationDefs[word]){
					uppercaseWords[word] = '1';
				}else if(findDefinition){
					abbreviationDefs[word] = findDefinition[0];
				}
			}
		}
	});

	const wordList = Object.keys(uppercaseWords).join(', ');
	if(wordList.length > 0) {
		sentence.getSuggestions().push(new Suggestion(
			'Minimize abbreviations', 
			'https://www.plainlanguage.gov/guidelines/words/minimize-abbreviations/',
			'Minimize abbreviations - Plain language guidelines',
			`The sentence contains the following abbreviations without definition: ${wordList}.`,
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			wordList || '',
			wordList || '',
			`Please consider adding a definition for "${wordList}".`
		));
		sentence.abbreviationFound();
	}
	const definedList = Object.keys(abbreviationDefs)
		.filter(abb => abbreviationDefs[abb] != 'reported')
		.map(abb => `${abbreviationDefs[abb]} (${abb})`)
		.join(', ');

	const matchedList = Object.keys(abbreviationDefs)
		.filter(abb => abbreviationDefs[abb] != 'reported')
		.map(abb => `${abbreviationDefs[abb]}`)
		.join(', ');

	if(definedList.length > 0) {
		sentence.getSuggestions().push(new Kudo(
			'Found the definition of an abbreviation', 
			'https://www.plainlanguage.gov/guidelines/words/minimize-abbreviations/',
			'Minimize abbreviations - Plain language guidelines',
			`The sentence contains an abbreviation with a definition: ${definedList}. Remember to keep abbreviations to a minimum.`,
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			definedList || '',
			matchedList || ''
		));
		sentence.abbreviationFound();
	}

	Object.keys(abbreviationDefs)
		.forEach(abb => abbreviationDefs[abb] = 'reported');
	return abbreviationDefs;
}

