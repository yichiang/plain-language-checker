import { FeedbackData, FeedbackType } from '../Types';
import { Issue, Kudo, Suggestion } from './Parser';

export class Sentence {
	private text: string;  // can be removed, leave for debugging
	private sentenceNumber: number;
	private paragraphNumber: number;
	private words: string[];
	private wordsCount: number;
	private transitionWordsCount: number;
	private examplesCount: number;
	// Feedback items
	private issues: Issue[];
	private suggestions: Suggestion[];
	private kudos: Kudo[];

	constructor(text: string, sentenceNumber: number, paragraphNumber: number) {
		// Handle multiple whitespaces
		this.text = text.trim().replace(/[\s]+/gi, ' ');
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
		// Feedback items
		this.issues = [];
		this.suggestions = [];
		this.kudos = [];
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

	getWordsCount (): number {
		return this.wordsCount;
	}

	getTransitionWordsCount (): number {
		return this.transitionWordsCount;
	}

	getExamplesCount (): number {
		return this.examplesCount;
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
			stringSuggestion: stringSuggestion // Other word(s) suggestions, may be empty
		};
	}

	// Getters
	getData (): FeedbackData {
		return this.data;
	}
}
