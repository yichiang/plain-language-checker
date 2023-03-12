export enum FeedbackType {
	Issue = 'Issue',
	Suggestion = 'Suggestion',
	Kudo = 'Kudo',
}

// TODO: Add more information here. We could list the words in the context or just say a word number in the sentence
// https://github.com/yichiang/plain-language-checker/issues/33
export type FeedbackData = {
    key?: string;
    name: string;
    feedbackType: FeedbackType;
    link: string;
    linkText: string;
    description: string;
    matchedString: string;
    stringSuggestion: string;    
    paragraphNumber: number;
    sentenceNumber: number;
}

export type GeneralFeedbackData = {
    description: string;
    link: string;
    linkText: string;
}