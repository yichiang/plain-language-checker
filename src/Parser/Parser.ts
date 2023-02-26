import { FeedbackType } from '../Types/index';
import { Paragraph } from './Paragraph';
import { Feedback } from './Sentence';
import checkPassive from './Validator/PassiveVoice';
import { wordListArray } from './WordList';

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
		// Process each sentence, looking for Feedback
		for (const paragraph of this.getParagraphs())
		{
			for (const sentence of paragraph.getSentences())
			{
				// Check all WordList first
				for (const wordList of wordListArray)
				{
					wordList.processSentence(sentence);
				}

				// Check for passive voice
				checkPassive(sentence);

				// TODO: Check for sentence and paragraph length here

			}
		}
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
