export class Text {
	private text: string;  // can be removed, leave for debugging
	private paragraphs: Paragraph[];

	constructor(text: string) {
		// Handle multiple line breaks
		this.text = text.replace(/[\r\n]+/gi, '\n');
		// Remove trailing linebreaks
		this.text = this.text.replace(/[\r\n]+$/gi, '').trim();
		// Split in paragraphs
		const paragraphsText = this.text.split('\n');
		this.paragraphs = [];
		let idx = 1;
		for (const paragraphText of paragraphsText)
		{
			this.paragraphs.push(new Paragraph(paragraphText, idx));
			idx++;
		}
	}

	// Getters
	getParagraphs (): Paragraph[] {
		return this.paragraphs;
	}

	getParagraphsCount (): number {
		return this.paragraphs.length;
	}

	getSentencesCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getSentencesCount();
		}
		return count;
	}

	getWordsCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getWordsCount();
		}
		return count;
	}

	getTransitionWordsCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getTransitionWordsCount();
		}
		return count;
	}

	getExamplesCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getExamplesCount();
		}
		return count;
	}

	getText (): string {
		return this.text;
	}

	getIssues (): Issue[] {
		let result: Issue[] = [];
		for (const paragraph of this.paragraphs)
		{
			result = result.concat(paragraph.getIssues());
		}
		return result;
	}

	getIssuesCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getIssuesCount();
		}
		return count;
	}

	getSuggestions (): Suggestion[] {
		let result: Suggestion[] = [];
		for (const paragraph of this.paragraphs)
		{
			result = result.concat(paragraph.getSuggestions());
		}
		return result;
	}

	getSuggestionsCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getSuggestionsCount();
		}
		return count;
	}

	getKudos (): Kudo[] {
		let result: Kudo[] = [];
		for (const paragraph of this.paragraphs)
		{
			result = result.concat(paragraph.getKudos());
		}
		return result;
	}

	getKudosCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getKudosCount();
		}
		return count;
	}

	// Function that populates the Feedback items, it will process the text.
	parseText (): void {

		// TODO: Create all the WordLists here
		const map1 = new Map<string, string>();
		// // map1.set('a', 1);
		// // map1.set('b', 2);
		// // map1.set('c', 3);

		const set1 = new Set<string>();
		set1.add('also');
		set1.add('and');
		set1.add('in addition');
		set1.add('besides');
		set1.add('what is more');
		set1.add('similarly');
		set1.add('further');
		const dummyWordList = new WordList(
			'Transition words',
			FeedbackType.Kudo,
			'Nice use of a transition word! Use this when adding a point',
			'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
			'Use transition words - Plain language guidelines',
			map1,
			set1);

		// Process each sentence, looking for Feedback
		for (const paragraph of this.getParagraphs())
		{
			for (const sentence of paragraph.getSentences())
			{
				dummyWordList.processSentence(sentence);
			}
		}

	}

}

export class Paragraph {
	private text: string;  // can be removed, leave for debugging
	private paragraphNumber: number;
	private sentences: Sentence[];
	private sentencesCount: number;
	constructor(text: string, paragraphNumber: number) {
		this.text = text;
		// Paragraph number, starts at 1 for the first paragraph in the text
		this.paragraphNumber = paragraphNumber;
		this.sentences = [];
		const sentencesText = text.split('. ');
		let idx = 1;
		for (const sentenceText of sentencesText)
		{
			this.sentences.push(new Sentence(sentenceText, idx, this.paragraphNumber));
			idx++;
		}
		// Counters
		this.sentencesCount = this.sentences.length;
	}

	// Getters
	getSentences (): Sentence[] {
		return this.sentences;
	}

	getSentencesCount (): number {
		return this.sentencesCount;
	}

	getWordsCount (): number {
		let count = 0;
		for (const sentence of this.sentences)
		{
			count += sentence.getWordsCount();
		}
		return count;
	}

	getTransitionWordsCount (): number {
		let count = 0;
		for (const sentence of this.sentences)
		{
			count += sentence.getTransitionWordsCount();
		}
		return count;
	}

	getExamplesCount (): number {
		let count = 0;
		for (const sentence of this.sentences)
		{
			count += sentence.getExamplesCount();
		}
		return count;
	}

	getText (): string {
		return this.text;
	}

	getIssues (): Issue[] {
		let result: Issue[] = [];
		for (const sentence of this.sentences)
		{
			result = result.concat(sentence.getIssues());
		}
		return result;
	}

	getIssuesCount (): number {
		let count = 0;
		for (const sentence of this.sentences)
		{
			count += sentence.getIssuesCount();
		}
		return count;
	}

	getSuggestions (): Suggestion[] {
		let result: Suggestion[] = [];
		for (const sentence of this.sentences)
		{
			result = result.concat(sentence.getSuggestions());
		}
		return result;
	}

	getSuggestionsCount (): number {
		let count = 0;
		for (const sentence of this.sentences)
		{
			count += sentence.getSuggestionsCount();
		}
		return count;
	}

	getKudos (): Kudo[] {
		let result: Kudo[] = [];
		for (const sentence of this.sentences)
		{
			result = result.concat(sentence.getKudos());
		}
		return result;
	}

	getKudosCount (): number {
		let count = 0;
		for (const sentence of this.sentences)
		{
			count += sentence.getKudosCount();
		}
		return count;
	}

}

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

export enum FeedbackType {
	Issue = 'Issue',
	Suggestion = 'Suggestion',
	Kudo = 'Kudo',
}

export class Feedback {
	private name: string;
	private link: string;
	private linkText: string;
	private description: string;
	private matchedString: string;
	private stringSuggestion: string;
	private feedbackType: string;
	private paragraphNumber: number;
	private sentenceNumber: number;
	// TODO: Add more information here. We could list the words in the context or just say a word number in the sentence
	// https://github.com/yichiang/plain-language-checker/issues/33
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
		this.name = name;
		this.feedbackType = feedbackType;
		this.link = link;
		this.linkText = linkText;
		this.description = description;
		this.paragraphNumber = paragraphNumber;
		this.sentenceNumber = sentenceNumber;
		// The values below are set by the parsing function
		this.matchedString = matchedString; // String that matched a keyword
		this.stringSuggestion = stringSuggestion; // Other word(s) suggestions, may be empty
	}
}

export class Issue extends Feedback {
	constructor(
		name: string,
		link: string,
		linkText: string,
		description: string,
		paragraphNumber: number,
		sentenceNumber: number,
		stringIssue: string,
		stringSuggestion = ''
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Issue, link, linkText, description, paragraphNumber, sentenceNumber, stringIssue, stringSuggestion);
	}
}

export class Suggestion extends Feedback {
	constructor(
		name: string,
		link: string,
		linkText: string,
		description: string,
		paragraphNumber: number,
		sentenceNumber: number,
		matchedString: string,
		stringSuggestion = ''
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Suggestion, link, linkText, description, paragraphNumber, sentenceNumber, matchedString, stringSuggestion);
	}
}

export class Kudo extends Feedback {
	constructor(
		name: string,
		link: string,
		linkText: string,
		description: string,
		paragraphNumber: number,
		sentenceNumber: number,
		matchedString: string
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Kudo, link, linkText, description, paragraphNumber, sentenceNumber, matchedString);
	}
}

class WordList {
	private name: string;
	private feedbackType: FeedbackType;
	private description: string;
	private link: string;
	private linkText: string;
	private map: Map<string, string>;
	private set: Set<string>;
	constructor(name: string, feedbackType: FeedbackType, description: string, link: string, linkText: string, map: Map<string, string> = new Map(), set: Set<string> = new Set()) {
		this.name = name;
		this.feedbackType = feedbackType;
		this.description = description;
		this.link = link;
		this.linkText = linkText;
		// Contains a mapping from known words to suggested words
		this.map = map;
		// Words for which there are no suggestions. These might be good words or words that should be removed completely
		this.set = set;
	}

	processSentence(sentence: Sentence): void {
		// Check our map and set to see if the sentence contains any of them
		// If so, create a Feedback belonging to that sentence
		// Note: Had to enable downlevelIteration in tsconfig.json.
		// https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript
		for (const [wordsToSearch, suggestionWords] of this.map) {
			if (sentence.getText().toLowerCase().includes(wordsToSearch.toLowerCase()))
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
			if (sentence.getText().toLowerCase().includes(wordsToSearch.toLowerCase()))
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