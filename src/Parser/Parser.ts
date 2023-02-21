export class Text {
	private text: string;
	private paragraphs: string[];
	private paragraphsCount: number;
	private sentencesCount: number;
	private wordsCount: number;
	private transitionWordsCount: number;
	private examplesCount: number;
	constructor(text: string) {
		this.text = text;
		this.paragraphs = [];
		// Counters
		this.paragraphsCount = 0;
		this.sentencesCount = 0;
		this.wordsCount = 0;
		this.transitionWordsCount = 0;
		this.examplesCount = 0;
	}
}

export class Paragraph {
	private text: string;
	private paragraphNumber: number;
	private sentences: string[];
	private sentencesCount: number;
	private wordsCount: number;
	private transitionWordsCount: number;
	private examplesCount: number;
	constructor(text: string, paragraphNumber: number) {
		this.text = text;
		// Paragraph number, starts at 1 for the first paragraph in the text
		this.paragraphNumber = paragraphNumber;
		this.sentences = [];
		// Counters
		this.sentencesCount = 0;
		this.wordsCount = 0;
		this.transitionWordsCount = 0;
		this.examplesCount = 0;
	}
}

export class Sentence {
	private text: string;
	private paragraphNumber: number;
	private words: string[];
	private feedback: string[];
	private wordsCount: number;
	private transitionWordsCount: number;
	private examplesCount: number;
	constructor(text: string, paragraphNumber: number) {
		this.text = text;
		// Sentence number, starts at 1 for the first sentence in the paragraph
		this.paragraphNumber = paragraphNumber;
		this.words = [];
		this.feedback = [];
		// Counters
		this.wordsCount = 0;
		this.transitionWordsCount = 0;
		this.examplesCount = 0;
	}
}

export class Feedback {
	private name: string;
	private link: string;
	private linkText: string;
	private description: string;
	private matchedString: string;
	private stringSuggestion: string;
	private feedbackType: string;
	constructor(
		name: string,
		feedbackType: string,
		link: string,
		linkText: string,
		description: string,
		matchedString: string,
		stringSuggestion = ''
	) {
		// The values below should be part of the metadata in the text file
		this.name = name;
		this.feedbackType = feedbackType; // Must be an instance of FeedbackType, see above
		this.link = link;
		this.linkText = linkText;
		this.description = description;
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
		stringIssue: string,
		stringSuggestion: string
	) {
		// The values below should be part of the metadata in the text file
		super(name, 'Issue', link, linkText, description, stringIssue, stringSuggestion);
	}
}

export class Suggestion extends Feedback {
	constructor(
		name: string,
		link: string,
		linkText: string,
		description: string,
		matchedString: string,
		stringSuggestion: string
	) {
		// The values below should be part of the metadata in the text file
		super(name, 'Suggestion', link, linkText, description, matchedString, stringSuggestion);
	}
}

export class Good extends Feedback {
	constructor(
		name: string,
		link: string,
		linkText: string,
		description: string,
		matchedString: string
	) {
		// The values below should be part of the metadata in the text file
		super(name, 'Good', link, linkText, description, matchedString);
	}
}
