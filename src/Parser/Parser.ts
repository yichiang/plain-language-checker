import { FeedbackData, FeedbackType } from '../Types';
import { Paragraph } from './Paragraph';
import { Feedback } from './Sentence';
import reportAbbreviation, { strObj } from './Validator/AbbreviationChecker';
import checkPassive from './Validator/PassiveVoice';
import reportSlashUsage from './Validator/SlashChecker';
import reportSyllableHighCount from './Validator/SyllableCount';
import { wordListArray } from './WordList';

const maxNumberOfWordsInSentence = 35;
const maxNumberOfSentencesInParaghraph = 7;

export class Text {
	private text: string;  // can be removed, leave for debugging
	private paragraphs: Paragraph[];

	constructor(text: string) {
		// Handle multiple line breaks
		this.text = text.replace(/[\r\n]+/gi, '\n');
		// Remove trailing linebreaks
		this.text = this.text.replace(/[\r\n]+$/gi, '').trim();
		// Convert tabs to spaces
		this.text = this.text.replace(/[\t]+/gi, ' ');
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
	getArticle (): Text {
		return this;
	}

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

	getAbbreviationsCount (): number {
		let count = 0;
		for (const paragraph of this.paragraphs)
		{
			count += paragraph.getAbbreviationsCount();
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

	getFeedback (): FeedbackData[] {
		let result: FeedbackData[] = [];
		for (const paragraph of this.paragraphs)
		{
			result = result.concat(paragraph.getFeedback()); 
		}
		return result;
	}

	// Function that populates the Feedback items, it will process the text.
	parseText (): void {
		// Process each sentence, looking for Feedback
		let abbreviationDefs: strObj = {};
		for (const paragraph of this.getParagraphs())
		{
			for (const sentence of paragraph.getSentences())
			{
				// Check all WordList first
				for (const wordList of wordListArray)
				{
					wordList.processSentence(sentence);
				}
				// Check for abbreviations
				abbreviationDefs = reportAbbreviation(sentence, abbreviationDefs);
			
				// Check for passive voice
				checkPassive(sentence);

				// Check for syllable
				reportSyllableHighCount(sentence);

				// Check for certain slash usage
				reportSlashUsage(sentence);

				// Check for sentence length
				if (sentence.getWordsCount() > maxNumberOfWordsInSentence)
				{
					sentence.getSuggestions().push(new Suggestion(
						'Long sentence',
						'https://www.plainlanguage.gov/guidelines/concise/write-short-sentences/',
						'Write short sentences - Plain language guidelines',
						'This sentence is ' + sentence.getWordsCount() + ' words long, which is over our recommended ' + maxNumberOfWordsInSentence + ' words long, please consider splitting or rephrasing it to reduce the length.',
						sentence.getParagraphNumber(),
						sentence.getSentenceNumber(),
						'',
						'',
						''));
				}

			}

			// Check for paragraph length
			if (paragraph.getSentencesCount() > maxNumberOfSentencesInParaghraph)
			{
				// We need to insert the suggestion to a sentence so grab the first one, also grab the text from
				// that sentence for the matched string
				const sentenceToInsertSuggestion = paragraph.getSentences()[0];
				// // const textToInclude = sentenceToInsertSuggestion.getText();
				sentenceToInsertSuggestion.getSuggestions().push(new Suggestion(
					'Long paragraph',
					'https://www.plainlanguage.gov/guidelines/concise/write-short-paragraphs/',
					'Write short paragraphs - Plain language guidelines',
					'This paragraph is ' + paragraph.getSentencesCount() + ' sentences long, which is over our recommended ' + maxNumberOfSentencesInParaghraph + ' sentences long, please consider splitting it to reduce the length.',
					paragraph.getParagraphNumber(),
					sentenceToInsertSuggestion.getSentenceNumber(),
					'',
					'',
					''));
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
		matchedString: string,
		stringSuggestion = ''
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Issue, link, linkText, description, paragraphNumber, sentenceNumber, matchedString, stringSuggestion);
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
		trueMatchedString: string,
		stringSuggestion: string
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Suggestion, link, linkText, description, paragraphNumber, sentenceNumber, matchedString, trueMatchedString, stringSuggestion);
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
		matchedString: string,
		trueMatchedString: string
	) {
		// The values below should be part of the metadata in the text file
		super(name, FeedbackType.Kudo, link, linkText, description, paragraphNumber, sentenceNumber, matchedString, trueMatchedString);
	}
}
