import { Issue, Kudo, Suggestion } from './Parser';
import { Sentence } from './Sentence';

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