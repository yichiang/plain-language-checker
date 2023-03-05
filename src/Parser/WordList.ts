import { FeedbackType } from '../Types';
import { Issue, Kudo, Suggestion } from './Parser';
import { Sentence } from './Sentence';

type ValidatingFunction = (sentence: string, wordsToSearch: string) => boolean;

export class WordList {
	private name: string;
	private feedbackType: FeedbackType;
	private description: string;
	private link: string;
	private linkText: string;
	private map: Map<string, string>;
	private set: Set<string>;
	private checkerFunction: ValidatingFunction;
	constructor(
		name: string,
		feedbackType: FeedbackType,
		description: string,
		link: string,
		linkText: string,
		map: Map<string, string> = new Map(),
		set: Set<string> = new Set(),
		checkerFunction: ValidatingFunction
	) {
		this.name = name;
		this.feedbackType = feedbackType;
		this.description = description;
		this.link = link;
		this.linkText = linkText;
		// Contains a mapping from known words to suggested words
		this.map = map;
		// Words for which there are no suggestions. These might be good words or words that should be removed completely
		this.set = set;
		this.checkerFunction = checkerFunction;
	}

	processSentence(sentence: Sentence): void {
		// Check our map and set to see if the sentence contains any of them
		// If so, create a Feedback belonging to that sentence
		// Note: Had to enable downlevelIteration in tsconfig.json.
		// https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript
		for (const [wordsToSearch, suggestionWords] of this.map) {
			if (this.checkerFunction(sentence.getText(), wordsToSearch))
			{
				if (this.feedbackType === FeedbackType.Issue)
				{
					sentence.getIssues().push(new Issue(this.name, this.link, this.linkText, this.description, sentence.getParagraphNumber(), sentence.getSentenceNumber(), wordsToSearch, suggestionWords));
				}
				else if (this.feedbackType === FeedbackType.Suggestion)
				{
					sentence.getSuggestions().push(new Suggestion(this.name, this.link, this.linkText, this.description, sentence.getParagraphNumber(), sentence.getSentenceNumber(), wordsToSearch, suggestionWords));
				}
				else if (this.feedbackType === FeedbackType.Kudo)
				{
					sentence.getKudos().push(new Kudo(this.name, this.link, this.linkText, this.description, sentence.getParagraphNumber(), sentence.getSentenceNumber(), wordsToSearch));
				}
			}
		}

		// Now check all the words in our set, these don't have any suggestions
		for (const wordsToSearch of this.set) {
			if (this.checkerFunction(sentence.getText(), wordsToSearch))
			{
				if (this.feedbackType === FeedbackType.Issue)
				{
					sentence.getIssues().push(new Issue(this.name, this.link, this.linkText, this.description, sentence.getParagraphNumber(), sentence.getSentenceNumber(), wordsToSearch));
				}
				else if (this.feedbackType === FeedbackType.Suggestion)
				{
					sentence.getSuggestions().push(new Suggestion(this.name, this.link, this.linkText, this.description, sentence.getParagraphNumber(), sentence.getSentenceNumber(), wordsToSearch));
				}
				else if (this.feedbackType === FeedbackType.Kudo)
				{
					sentence.getKudos().push(new Kudo(this.name, this.link, this.linkText, this.description, sentence.getParagraphNumber(), sentence.getSentenceNumber(), wordsToSearch));
				}
			}
		}

	}
}

// Validating functions
function validatorStartsWith (sentence: string, wordsToSearch: string): boolean {
	// Check if the transition word happened at the beginning of the string
	const re = new RegExp(wordsToSearch + '\\b', 'i');
	return sentence.search(re) == 0;
}

// Careful with the function below since it will match substring. Example: "Sometimes" will match "so".
// function validatorStartsWith (sentence: string, wordsToSearch: string): boolean {
// 	return sentence.toLowerCase().startsWith(wordsToSearch.toLowerCase());
// }

function validatorIncludes (sentence: string, wordsToSearch: string): boolean {
	const re = new RegExp('\\b' + wordsToSearch + '\\b', 'i');
	return sentence.search(re) >= 0;
}

/////////////////////////////////////////////
// WordList instantiation
/////////////////////////////////////////////

// Transition words
const transitionWordsAdd = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when adding a point',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['also', 'and', 'in addition', 'besides', 'what is more', 'what’s more', 'similarly', 'further']),
	validatorStartsWith);

const transitionWordsExample = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when giving an example',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['for instance', 'for example', 'for one thing', 'for another thing']),
	validatorStartsWith);

const transitionWordsRephrasing = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when rephrasing',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['in other words', 'that is', 'in short', 'put differently', 'again']),
	validatorStartsWith);

const transitionWordsResult = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when introducing a result',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['so', 'as a result', 'thus', 'therefore', 'accordingly', 'then']),
	validatorStartsWith);

const transitionWordsContrasting = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when contrasting',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['but', 'however', 'on the other hand', 'still', 'nevertheless', 'conversely']),
	validatorStartsWith);

const transitionWordsSummingUp = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when summing up',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['to summarize', 'to sum up', 'to conclude', 'in conclusion', 'in short']),
	validatorStartsWith);

const transitionWordsSequencing = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when sequencing ideas',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['first', 'second', 'third', 'fourth', 'then', 'next', 'finally']),
	validatorStartsWith);

// Prepositions
const prepositions = new WordList(
	'Preposition',
	FeedbackType.Issue,
	'Consider replacing the word(s) above with the suggestion to make your text more concise.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>([
		['a number of', 'several, a few, many'],
		['a sufficient number of', 'enough'],
		['at this point in time', 'now'],
		['is able to', 'can'],
		['are able to', 'can'],
		['on a monthly basis', 'monthly'],
		['on a weekly basis', 'weekly'],
		['on a daily basis', 'daily'],
		['on the ground that', 'because'],
		['be responsible for', 'must'],
		['in order to', 'to']
	]),
	new Set<string>(),
	validatorIncludes);

const prepositions2 = new WordList(
	'Preposition',
	FeedbackType.Issue,
	'Consider deleting the word(s) above to make your text more concise.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['an amount of']),
	validatorIncludes);

// Doublets and triplets
const doubletsTriplets = new WordList(
	'Doublets and triplets',
	FeedbackType.Issue,
	'Please do not use different words that mean the same thing.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>([
		['due and payable', 'due'],
		['cease and desist', 'stop'],
		['desist and cease', 'stop'],
		['knowledge and information', 'knowledge, information'],
		['information and knowledge', 'knowledge, information'],
		['begin and commence', 'start'],
		['commence and begin', 'start']
	]),
	new Set<string>(),
	validatorIncludes);

// Excess Modifiers
const excessModifiers = new WordList(
	'Excess modifiers',
	FeedbackType.Suggestion,
	'Please review the excess modifier and make sure it is necessary.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['absolutely', 'actually', 'completely', 'really', 'quite', 'totally', 'total', 'very', 'somewhat', 'particularly']),
	validatorIncludes);

// Jargon
const legalJargon = new WordList(
	'Legal jargon',
	FeedbackType.Issue,
	'Please avoid using legal jargon as it is not clear to most people.',
	'https://www.plainlanguage.gov/guidelines/words/avoid-jargon/',
	'Avoid jargon - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['above-mentioned', 'aforementioned', 'foregoing', 'henceforth', 'hereafter', 'hereby', 'heretofore', 'herewith', 'thereafter', 'thereof', 'therewith', 'whatsoever', 'whereat', 'wherein', 'whereof']),
	validatorIncludes);

const businessJargon = new WordList(
	'Business jargon',
	FeedbackType.Issue,
	'Please avoid using business jargon as it is not clear to most people.',
	'https://www.plainlanguage.gov/guidelines/words/avoid-jargon/',
	'Avoid jargon - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['Thinking outside the box', 'Value added', 'Best practice', 'For all intents and purposes', 'Touch base', 'Integrating quality solutions', 'Promoting an informed and synergistic teams', 'Strategically engaging departments']),
	validatorIncludes);

// Shall and must
const shallMust = new WordList(
	'Use “must” to indicate requirements',
	FeedbackType.Issue,
	'Please avoid using "shall" and use "must" instead.',
	'https://www.plainlanguage.gov/guidelines/conversational/use-must-to-indicate-requirements/',
	'Use “must” to indicate requirements - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['shall']),
	validatorIncludes);


export const wordListArray: WordList[] = [
	transitionWordsAdd,
	transitionWordsExample,
	transitionWordsRephrasing,
	transitionWordsResult,
	transitionWordsContrasting,
	transitionWordsSummingUp,
	transitionWordsSequencing,
	prepositions,
	prepositions2,
	doubletsTriplets,
	excessModifiers,
	legalJargon,
	businessJargon,
	shallMust
];