import { Kudo, Suggestion } from '../Parser';
import { Sentence } from '../Sentence';
type strObj = {[key:string]:string}

const possibleWordsWithDef: strObj = {};

export default function reportAbbreviation(sentence: Sentence) {
	const possibleWords: strObj = {};
	// Process each sentence, looking for Feedback
	sentence.getWords().forEach( (word: string) => {
		//check for all caps
		if(!possibleWordsWithDef[word] && word.length > 1 &&
            word.toUpperCase() === word 
        && !/\d/.test(word)) {
           
			if (!possibleWords[word] && !possibleWordsWithDef[word]) {
				/* eslint-disable no-useless-escape */
				const endRegexStr = '\\s((with|of)+\\s)?';
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
				if(!findDefinition && !possibleWordsWithDef[word]){
					possibleWords[word] = '1';
				}else if(findDefinition){
					possibleWordsWithDef[word] = findDefinition[0];
				}
			}
		}
	});

	const wordList = Object.keys(possibleWords).join(',');
	if(wordList.length > 0) {
		sentence.getSuggestions().push(new Suggestion(
			'Minimize abbreviations', 
			'https://www.plainlanguage.gov/guidelines/words/minimize-abbreviations/',
			'Minimize abbreviations - Plain language guidelines',
			`The sentence contains the abbreviations without definition: ${wordList}.`,
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			wordList || '',
			`Please consider explains "${wordList}".`
		));        
	}
	const definteList = Object.keys(possibleWordsWithDef)
		.filter(abb => possibleWordsWithDef[abb] != 'reported')
		.map(abb => `${possibleWordsWithDef[abb]} (${abb})`)
		.join(',');

	if(definteList.length > 0) {
		sentence.getSuggestions().push(new Kudo(
			'Minimize abbreviations & Good to definite abbreviations', 
			'https://www.plainlanguage.gov/guidelines/words/minimize-abbreviations/',
			'Minimize abbreviations - Plain language guidelines',
			`The sentence contains the abbreviations without definition: ${definteList}.`,
			sentence.getParagraphNumber(),
			sentence.getSentenceNumber(),
			definteList || ''
		));        
	}

	Object.keys(possibleWordsWithDef).forEach(abb => possibleWordsWithDef[abb] = 'reported');
}

