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
	return sentence.toLowerCase().search(re) == 0;
}

// Careful with the function below since it will match substring. Example: "Sometimes" will match "so".
// function validatorStartsWith (sentence: string, wordsToSearch: string): boolean {
// 	return sentence.toLowerCase().startsWith(wordsToSearch.toLowerCase());
// }

// function validatorIncludes (sentence: string, wordsToSearch: string): boolean {
// 	return sentence.toLowerCase().includes(wordsToSearch.toLowerCase());
// }

// WordList instantiation
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

export const wordListArray: WordList[] = [
	transitionWordsAdd,
	transitionWordsExample,
	transitionWordsRephrasing,
	transitionWordsResult,
	transitionWordsContrasting,
	transitionWordsSummingUp,
	transitionWordsSequencing
];