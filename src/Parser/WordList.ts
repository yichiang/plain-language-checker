import { FeedbackType } from '../Types';
import { Issue, Kudo, Suggestion } from './Parser';
import { Sentence } from './Sentence';

export class WordList {
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