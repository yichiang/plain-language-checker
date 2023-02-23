export class Text {
	private text: string;  // can be removed, leave for debugging
	private paragraphs: Paragraph[];

	constructor(text: string) {
		this.text = text;
		const paragraphsText = text.split(`.
		`);
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
		const sentencesText = text.split(". ");
		let idx = 1;
		for (const sentenceText in sentencesText)
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
		this.text = text;
		// Sentence number, starts at 1 for the first sentence in the paragraph
		this.sentenceNumber = sentenceNumber;
		this.paragraphNumber = paragraphNumber;
		this.words = text.trim().split(" ");
		// Counters
		this.wordsCount = this.words.length;
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

	getSuggestions (): Suggestion[] {
		return this.suggestions;
	}

	getKudos (): Kudo[] {
		return this.kudos;
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
	constructor(
		name: string,
		feedbackType: FeedbackType,
		link: string,
		linkText: string,
		description: string,
		matchedString: string,
		stringSuggestion = ''
	) {
		this.name = name;
		this.feedbackType = feedbackType;
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
		stringSuggestion = ''
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Issue, link, linkText, description, stringIssue, stringSuggestion);
	}
}

export class Suggestion extends Feedback {
	constructor(
		name: string,
		link: string,
		linkText: string,
		description: string,
		matchedString: string,
		stringSuggestion = ''
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Suggestion, link, linkText, description, matchedString, stringSuggestion);
	}
}

export class Kudo extends Feedback {
	constructor(
		name: string,
		link: string,
		linkText: string,
		description: string,
		matchedString: string
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Kudo, link, linkText, description, matchedString);
	}
}



const textDemo = `I focused on tools for learning programming. The tools for learning programming are useful to attract young people and teach them how to program. Teaching young people to program is important to motivate them to go after a computer science career. As a result, more and more schools are teaching students how to program.
Most of the tools for learning programming are blocks-based. Blocks-based programming environments rely on vision a lot. Students need to see so they can write a program and look at the result. Students who are blind or low-vision are at a disadvantage since they may not see what they need to use block-based programming environments.
The article summarized below describes how the authors created the Blocks4All app. The authors of the article did a study with 5 blind or low-vision (BLV) kids and a teacher of the visually impaired (TVI). In the study, the authors describe problems they found in existing programming environments for BLV kids. The authors created an app called Blocks4All which tries to fix these problems and make programming accessible for all.`;


class WordList {
	private name: string;
	private feedbackType: FeedbackType;
	private description: string;
	private link: string;
	private linkText: string;
	private map: Map<string, string>;
	private set: Set<string>;
	constructor(name: string, feedbackType: FeedbackType, description: string, link: string, linkText: string) {
	  this.name = name;
	  this.feedbackType = feedbackType;
	  this.description = description;
	  this.link = link;
	  this.linkText = linkText;
	  // Contains a mapping from known words to suggested words
	  this.map = new Map();
	  // Words for which there are no suggestions. These might be good words or words that should be removed completely
	  this.set = new Set();
	}

    processSentence(sentence: Sentence): void {
		// Note to Sofia: We should potentially create the HTML parts of the report here as well 

        // Check our map and set to see if the sentence contains any of them
        // If so, create a Feedback belonging to that sentence
		// Note: Had to enable downlevelIteration in tsconfig.json.
		// https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript
        for (const [wordsToSearch, suggestionWords] of this.map) {
            if (sentence.getText().includes(wordsToSearch))
            {
				if (this.feedbackType === FeedbackType.Issue)
				{
					sentence.getIssues().push(new Issue(this.name, this.link, this.linkText, this.description, wordsToSearch, suggestionWords));
				}
				else if (this.feedbackType === FeedbackType.Suggestion)
				{
					sentence.getSuggestions().push(new Suggestion(this.name, this.link, this.linkText, this.description, wordsToSearch, suggestionWords));
				}
				else if (this.feedbackType === FeedbackType.Kudo)
				{
					sentence.getKudos().push(new Kudo(this.name, this.link, this.linkText, this.description, wordsToSearch));
				}
            }    
        }

		// Now check all the words in our set, these don't have any suggestions
        for (const wordsToSearch of this.set) {
            if (sentence.getText().includes(wordsToSearch))
            {
				if (this.feedbackType === FeedbackType.Issue)
				{
					sentence.getIssues().push(new Issue(this.name, this.link, this.linkText, this.description, wordsToSearch));
				}
				else if (this.feedbackType === FeedbackType.Suggestion)
				{
					sentence.getSuggestions().push(new Suggestion(this.name, this.link, this.linkText, this.description, wordsToSearch));
				}
				else if (this.feedbackType === FeedbackType.Kudo)
				{
					sentence.getKudos().push(new Kudo(this.name, this.link, this.linkText, this.description, wordsToSearch));
				}
            }    
        }

    }
}

// TODO: Add WordsLists here



// Parser flow

function runParser(): void {
	// First ingest the text, this will be what we read from the text box input instead of textDemo
	let text = new Text(textDemo);

	// TODO: Create all the WordLists here
	let dummyWordList = new WordList("Name", FeedbackType.Issue, "Description", "Link", "LinkText");

	// Process each sentence, looking for Feedback
	for (const paragraph of text.getParagraphs())
	{
		for (let sentence of paragraph.getSentences())
		{
			dummyWordList.processSentence(sentence);
		}
	}

	// Add some statistics to the HTML here (example count, transition word count, etc)
}