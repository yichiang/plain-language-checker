import { Suggestion } from '../Parser';
import { Sentence } from '../Sentence';
import { irregulars } from './irregularVerbs';

// Source: https://github.com/btford/passive-voice/blob/master/passive.js
const re = new RegExp('\\b(am|are|were|being|is|been|was|be)\\b\\s*([\\w]+ed|' + irregulars.join('|') + ')\\b', 'gi');
let byRe: RegExp; // lazly construct

export default function checkPassive(sentence: Sentence, checkForBy=false) {
 
	const r = (checkForBy) ?
		(byRe || constructByRe()) : re; // not sorry
    
	let match: (RegExpExecArray | null) = r.exec(sentence.getText());
	while(match) {
		// exception
		if(match[0].indexOf('indeed') === -1) {
			sentence.getSuggestions().push(new Suggestion(
				'Use active voice',
				'https://www.plainlanguage.gov/guidelines/conversational/use-active-voice/',
				'Use active voice - Plain language guidelines',
				'Active voice makes it clear who is supposed to do what. It eliminates ambiguity about responsibilities.',
				sentence.getParagraphNumber(),
				sentence.getSentenceNumber(),
				match[0] || '',
				match[0] || '',
				`consider replacing "${match[0]}" with active voice.`
			));
		}
		match = r.exec(sentence.getText());
	}

}

function constructByRe () {
	return byRe = new RegExp(re.toString().slice(1, -3) + '\\s*by\\b', 'gi');
}