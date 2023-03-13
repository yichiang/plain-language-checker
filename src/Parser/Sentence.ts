import { FeedbackData, FeedbackType } from '../Types';
import { Issue, Kudo, Suggestion } from './Parser';

export class Sentence {
	private text: string;  // can be removed, leave for debugging
	private sentenceNumber: number;
	private paragraphNumber: number;
	private words: string[];
	// Counters
	private wordsCount: number;
	private transitionWordsCount: number;
	private examplesCount: number;
	private abbreviationsCount: number;
	// Feedback items
	private issues: Issue[];
	private suggestions: Suggestion[];
	private kudos: Kudo[];
	private hasBeenPrinted: boolean;

	constructor(text: string, sentenceNumber: number, paragraphNumber: number) {
		// Handle ellipsis
		this.text = text.trim().replace(/\.\.\./gi, ' ');
		// Handle multiple whitespaces
		this.text = this.text.trim().replace(/[\s]+/gi, ' ');
		// Sentence number, starts at 1 for the first sentence in the paragraph
		this.sentenceNumber = sentenceNumber;
		this.paragraphNumber = paragraphNumber;
		this.words = this.text.split(' ');
		// Counters
		if (this.words.length == 0)
		{
			// If no whitespaces found, check if this is an empty string
			this.wordsCount = text === '' ? 0 : 1;
		}
		else
		{
			this.wordsCount = this.words.length;
		}
		//////////////////////////////////////////////////////////
		// Everything below will be filled by the WordLists
		//////////////////////////////////////////////////////////
		this.transitionWordsCount = 0;
		this.examplesCount = 0;
		this.abbreviationsCount = 0;
		// Feedback items
		this.issues = [];
		this.suggestions = [];
		this.kudos = [];
		this.hasBeenPrinted = false;
	}

	// Increase counters
	exampleFound(): void {
		this.examplesCount++;
	}

	transitionWordFound(): void {
		this.transitionWordsCount++;
	}

	abbreviationFound(): void {
		this.abbreviationsCount++;
	}

	// Called by the UI when it has been included in the report
	markPrinted (): void {
		this.hasBeenPrinted = true;
	}

	// Getters
	getText (): string {
		return this.text;
	}

	getParagraphNumber (): number {
		return this.paragraphNumber;
	}

	getSentenceNumber (): number {
		return this.sentenceNumber;
	}

	getWords (): string[] {
		return this.words;
	}

	getWordsCount (): number {
		return this.wordsCount;
	}

	getTransitionWordsCount (): number {
		return this.transitionWordsCount;
	}

	getExamplesCount (): number {
		return this.examplesCount;
	}

	getAbbreviationsCount (): number {
		return this.abbreviationsCount;
	}

	getIssues (): Issue[] {
		return this.issues;
	}

	getIssuesCount (): number {
		return this.issues.length;
	}

	getSuggestions (): Suggestion[] {
		return this.suggestions;
	}

	getSuggestionsCount (): number {
		return this.suggestions.length;
	}

	getKudos (): Kudo[] {
		return this.kudos;
	}

	getKudosCount (): number {
		return this.kudos.length;
	}

	getHasBeenPrinted (): boolean {
		return this.hasBeenPrinted;
	}

	getFeedback (): FeedbackData[] {
		const result: FeedbackData[] = [];
		for (const issue of this.getIssues())
		{
			result.push(issue.getData());
		}
		for (const suggestion of this.getSuggestions())
		{
			result.push(suggestion.getData());
		}
		for (const kudo of this.getKudos())
		{
			result.push(kudo.getData());
		}
		return result;
	}

}

export class Feedback {
	private data: FeedbackData;
	constructor(
		name: string,
		feedbackType: FeedbackType,
		link: string,
		linkText: string,
		description: string,
		paragraphNumber: number,
		sentenceNumber: number,
		matchedString: string,
		trueMatchedString: string,
		stringSuggestion = ''
	) {
		this.data = {
			name: name,
			feedbackType: feedbackType,
			link: link,
			linkText: linkText,
			description: description,
			paragraphNumber: paragraphNumber,
			sentenceNumber: sentenceNumber,
			matchedString: matchedString, // String that matched a keyword
			trueMatchedString: trueMatchedString,
			stringSuggestion: stringSuggestion // Other word(s) suggestions, may be empty
		};
	}

	// Getters
	getData (): FeedbackData {
		return this.data;
	}
}
