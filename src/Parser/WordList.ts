import { FeedbackType } from '../Types';
import { Issue, Kudo, Suggestion } from './Parser';
import { Sentence } from './Sentence';

type ValidatingFunction = (sentence: string, wordsToSearch: string) => boolean;

export class WordList {
	private name: string;
	private feedbackType: FeedbackType;
	private description: string;
	private link: string;
	private linkText: string;
	private map: Map<string, string>;
	private set: Set<string>;
	private checkerFunction: ValidatingFunction;
	constructor(
		name: string,
		feedbackType: FeedbackType,
		description: string,
		link: string,
		linkText: string,
		map: Map<string, string> = new Map(),
		set: Set<string> = new Set(),
		checkerFunction: ValidatingFunction
	) {
		this.name = name;
		this.feedbackType = feedbackType;
		this.description = description;
		this.link = link;
		this.linkText = linkText;
		// Contains a mapping from known words to suggested words
		this.map = map;
		// Words for which there are no suggestions. These might be good words or words that should be removed completely
		this.set = set;
		this.checkerFunction = checkerFunction;
	}

	processSentence(sentence: Sentence): void {
		// Check our map and set to see if the sentence contains any of them
		// If so, create a Feedback belonging to that sentence
		// Note: Had to enable downlevelIteration in tsconfig.json.
		// https://mariusschulz.com/blog/downlevel-iteration-for-es3-es5-in-typescript
		for (const [wordsToSearch, suggestionWords] of this.map) {
			if (this.checkerFunction(sentence.getText(), wordsToSearch))
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
			if (this.checkerFunction(sentence.getText(), wordsToSearch))
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
				if (this.name === 'Example used')
				{
					// Increase example count of the sentence
					sentence.exampleFound();
				}
				else if (this.name === 'Transition words')
				{
					// Increase transition words count of the sentence
					sentence.transitionWordFound();
				}
			}
		}

	}
}

// Validating functions
function validatorStartsWith (sentence: string, wordsToSearch: string): boolean {
	// Check if the transition word happened at the beginning of the string
	const re = new RegExp(wordsToSearch + '\\b', 'i');
	return sentence.search(re) == 0;
}

// Careful with the function below since it will match substring. Example: "Sometimes" will match "so".
// function validatorStartsWith (sentence: string, wordsToSearch: string): boolean {
// 	return sentence.toLowerCase().startsWith(wordsToSearch.toLowerCase());
// }

function validatorIncludes (sentence: string, wordsToSearch: string): boolean {
	const re = new RegExp('\\b' + wordsToSearch + '\\b', 'i');
	return sentence.search(re) >= 0;
}

function validatorIncludesNoRegex (sentence: string, wordsToSearch: string): boolean {
	return sentence.toLowerCase().includes(wordsToSearch.toLowerCase());
}

/////////////////////////////////////////////
// WordList instantiation
/////////////////////////////////////////////

// Transition words
const transitionWordsAdd = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when adding a point',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['also', 'and', 'in addition', 'besides', 'what is more', 'what’s more', 'similarly', 'further']),
	validatorStartsWith);

const transitionWordsExample = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when giving an example',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['for instance', 'for example', 'for one thing', 'for another thing']),
	validatorStartsWith);

const transitionWordsRephrasing = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when rephrasing',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['in other words', 'that is', 'in short', 'put differently', 'again']),
	validatorStartsWith);

const transitionWordsResult = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when introducing a result',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['so', 'as a result', 'thus', 'therefore', 'accordingly', 'then']),
	validatorStartsWith);

const transitionWordsContrasting = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when contrasting',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['but', 'however', 'on the other hand', 'still', 'nevertheless', 'conversely']),
	validatorStartsWith);

const transitionWordsSummingUp = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when summing up',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['to summarize', 'to sum up', 'to conclude', 'in conclusion', 'in short']),
	validatorStartsWith);

const transitionWordsSequencing = new WordList(
	'Transition words',
	FeedbackType.Kudo,
	'Nice use of a transition word! Use this when sequencing ideas',
	'https://www.plainlanguage.gov/guidelines/organize/use-transition-words/',
	'Use transition words - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['first', 'second', 'third', 'fourth', 'then', 'next', 'finally']),
	validatorStartsWith);

// Prepositions
const prepositions = new WordList(
	'Preposition',
	FeedbackType.Issue,
	'Consider replacing the word(s) above with the suggestion to make your text more concise.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>([
		['a number of', 'several, a few, many'],
		['a sufficient number of', 'enough'],
		['at this point in time', 'now'],
		['is able to', 'can'],
		['are able to', 'can'],
		['on a monthly basis', 'monthly'],
		['on a weekly basis', 'weekly'],
		['on a daily basis', 'daily'],
		['on the ground that', 'because'],
		['be responsible for', 'must'],
		['in order to', 'to']
	]),
	new Set<string>(),
	validatorIncludes);

const prepositions2 = new WordList(
	'Preposition',
	FeedbackType.Issue,
	'Consider deleting the word(s) above to make your text more concise.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['an amount of']),
	validatorIncludes);

// Doublets and triplets
const doubletsTriplets = new WordList(
	'Doublets and triplets',
	FeedbackType.Issue,
	'Please do not use different words that mean the same thing.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>([
		['due and payable', 'due'],
		['cease and desist', 'stop'],
		['desist and cease', 'stop'],
		['knowledge and information', 'knowledge, information'],
		['information and knowledge', 'knowledge, information'],
		['begin and commence', 'start'],
		['commence and begin', 'start']
	]),
	new Set<string>(),
	validatorIncludes);

// Excess Modifiers
const excessModifiers = new WordList(
	'Excess modifiers',
	FeedbackType.Suggestion,
	'Please review the excess modifier and make sure it is necessary.',
	'https://www.plainlanguage.gov/guidelines/concise/',
	'Be concise - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['absolutely', 'actually', 'completely', 'really', 'quite', 'totally', 'total', 'very', 'somewhat', 'particularly']),
	validatorIncludes);

// Jargon
const legalJargon = new WordList(
	'Legal jargon',
	FeedbackType.Issue,
	'Please avoid using legal jargon as it is not clear to most people.',
	'https://www.plainlanguage.gov/guidelines/words/avoid-jargon/',
	'Avoid jargon - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['above-mentioned', 'aforementioned', 'foregoing', 'henceforth', 'hereafter', 'hereby', 'heretofore', 'herewith', 'thereafter', 'thereof', 'therewith', 'whatsoever', 'whereat', 'wherein', 'whereof']),
	validatorIncludes);

const businessJargon = new WordList(
	'Business jargon',
	FeedbackType.Issue,
	'Please avoid using business jargon as it is not clear to most people.',
	'https://www.plainlanguage.gov/guidelines/words/avoid-jargon/',
	'Avoid jargon - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['Thinking outside the box', 'Value added', 'Best practice', 'For all intents and purposes', 'Touch base', 'Integrating quality solutions', 'Promoting an informed and synergistic teams', 'Strategically engaging departments']),
	validatorIncludes);

// Shall and must
const shallMust = new WordList(
	'Use “must” to indicate requirements',
	FeedbackType.Issue,
	'Please avoid using "shall" and use "must" instead.',
	'https://www.plainlanguage.gov/guidelines/conversational/use-must-to-indicate-requirements/',
	'Use “must” to indicate requirements - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['shall']),
	validatorIncludes);

// Examples
const examples = new WordList(
	'Latin abbreviation',
	FeedbackType.Issue,
	'Please consider changing the word above with the suggestion below.',
	'https://www.plainlanguage.gov/guidelines/conversational/use-examples/',
	'Use examples - Plain language guidelines',
	new Map<string, string>([
		['e.g.', 'for example, for instance, such as'],
		['i.e.', 'that is']
	]),
	new Set<string>(),
	validatorIncludesNoRegex);

const examples2 = new WordList(
	'Example used',
	FeedbackType.Kudo,
	'Way to go! Examples are a great way to clarify complex concepts.',
	'https://www.plainlanguage.gov/guidelines/conversational/use-examples/',
	'Use examples - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['example', 'for instance', 'such as']),
	validatorIncludes);

// Simple words and phrases
const simpleWordsAndPhrases = new WordList(
	'Simple words and phrases',
	FeedbackType.Suggestion,
	'Please review the word above and check if it should be replaced for a simpler one.',
	'https://www.plainlanguage.gov/guidelines/words/use-simple-words-phrases/',
	'Use simple words and phrases - Plain language guidelines',
	new Map<string, string>([
		['accompany', 'go with'],
		['accomplish', 'carry out, do'],
		['accorded', 'given'],
		['accordingly', 'so'],
		['accrue', 'add, gain'],
		['accurate', 'correct, exact, right'],
		['additional', 'added, more, other'],
		['address', 'discuss'],
		['addressees', 'you'],
		['adjacent to', 'next to'],
		['advantageous', 'helpful'],
		['adversely impact on', 'hurt, set back'],
		['advise', 'recommend, tell'],
		['afford an opportunity', 'allow, let'],
		['aircraft', 'plane'],
		['allocate', 'divide'],
		['anticipate', 'expect'],
		['a number of', 'some'],
		['apparent', 'clear, plain'],
		['appreciable', 'many'],
		['appropriate', 'proper, right'],
		['approximate', 'about'],
		['arrive onboard', 'arrive'],
		['as a means of', 'to'],
		['ascertain', 'find out, learn'],
		['as prescribed by', 'in, under'],
		['assist, assistance', 'aid, help'],
		['attain', 'meet'],
		['attempt', 'try'],
		['at the present time', 'at present, now'],
		['benefit', 'help'],
		['by means of', 'by, with'],
		['capability', 'ability'],
		['caveat', 'warning'],
		['close proximity', 'near'],
		['combat environment', 'combat'],
		['combined', 'joint'],
		['commence', 'begin, start'],
		['comply with', 'follow'],
		['component', 'part'],
		['comprise', 'form, include, make up'],
		['concerning', 'about, on'],
		['consequently', 'so'],
		['consolidate', 'combine, join, merge'],
		['constitutes', 'is, forms, makes up'],
		['contains', 'has'],
		['convene', 'meet'],
		['currently', 'now'],
		['deem', 'believe, consider, think'],
		['delete', 'cut, drop'],
		['demonstrate', 'prove, show'],
		['depart', 'leave'],
		['designate', 'appoint, choose, name'],
		['desire', 'want, wish'],
		['determine', 'decide, figure, find'],
		['disclose', 'show'],
		['discontinue', 'drop, stop'],
		['disseminate', 'give, issue, pass, send'],
		['due to the fact that', 'due to, since'],
		['during the period', 'during'],
		['effect modifications', 'make changes'],
		['elect', 'choose, pick'],
		['eliminate', 'cut, drop, end'],
		['employ', 'use'],
		['encounter', 'meet'],
		['endeavor', 'try'],
		['ensure', 'make sure'],
		['enumerate', 'count'],
		['equipments', 'equipment'],
		['equitable', 'fair'],
		['establish', 'set up, prove, show'],
		['evidenced', 'showed'],
		['evident', 'clear'],
		['exhibit', 'show'],
		['expedite', 'hasten, speed up'],
		['expeditious', 'fast, quick'],
		['expend', 'spend'],
		['expertise', 'ability'],
		['expiration', 'end'],
		['facilitate', 'ease, help'],
		['failed to', 'didn’t'],
		['feasible', 'can be done, workable'],
		['females', 'women'],
		['finalize', 'complete, finish'],
		['for a period of', 'for'],
		['forfeit', 'give up, lose'],
		['forward', 'send'],
		['frequently', 'often'],
		['function', 'act, role, work'],
		['furnish', 'give, send'],
		['has a requirement for', 'needs'],
		['herein', 'here'],
		['heretofore', 'until now'],
		['herewith', 'below, here'],
		['however', 'but'],
		['identical', 'same'],
		['identify', 'find, name, show'],
		['immediately', 'at once'],
		['impacted', 'affected, changed'],
		['implement', 'carry out, start'],
		['in accordance with', 'by, following, per, under'],
		['in addition', 'also, besides, too'],
		['in an effort to', 'to'],
		['inasmuch as', 'since'],
		['insofar as', 'since'],
		['in a timely manner', 'on time, promptly'],
		['inception', 'start'],
		['incumbent upon', 'must'],
		['indicate', 'show, write down'],
		['indication', 'sign'],
		['initial', 'first'],
		['initiate', 'start'],
		['in lieu of', 'instead'],
		['in order that', 'for, so'],
		['in order to', 'to'],
		['in regard to', 'about, concerning, on'],
		['in relation to', 'about, with, to'],
		['interface', 'meet, work with'],
		['interpose no objection', 'don’t object'],
		['in the amount of', 'for'],
		['in the event of', 'if'],
		['in the near future', 'shortly, soon'],
		['in view of', 'since'],
		['in view of the above', 'so'],
		['is applicable to', 'applies to'],
		['is authorized to', 'may'],
		['is in consonance with', 'agrees with, follows'],
		['is responsible for', 'handles'],
		['it appears', 'seems'],
		['it is essential', 'must, need to'],
		['it is requested', 'please, we request, I request'],
		['liaison', 'discussion'],
		['limited number', 'limits'],
		['magnitude', 'size'],
		['maintain', 'keep, support'],
		['males', 'men'],
		['maximum', 'greatest, largest, most'],
		['methodology', 'method'],
		['minimize', 'decrease, method'],
		['minimum', 'least, smallest'],
		['modify', 'change'],
		['monitor', 'check, watch'],
		['necessitate', 'cause, need'],
		['notify', 'let know, tell'],
		['not later than', 'by, before'],
		['notwithstanding', 'inspite of, still'],
		['numerous', 'many'],
		['objective', 'aim, goal'],
		['obligate', 'bind, compel'],
		['observe', 'see'],
		['operate', 'run, use, work'],
		['optimum', 'best, greatest, most'],
		['option', 'choice, way'],
		['parameters', 'limits'],
		['participate', 'take part'],
		['perform', 'do'],
		['permit', 'let'],
		['pertaining to', 'about, of, on'],
		['portion', 'part'],
		['possess', 'have, own'],
		['practicable', 'practical'],
		['preclude', 'prevent'],
		['previous', 'earlier'],
		['previously', 'before'],
		['prioritize', 'rank'],
		['prior to', 'before'],
		['proceed', 'do, go ahead, try'],
		['proficiency', 'skill'],
		['promulgate', 'issue, publish'],
		['provide', 'give, offer, say'],
		['provided that', 'if'],
		['provides guidance for', 'guides'],
		['purchase', 'buy'],
		['pursuant to', 'by, following, per, under'],
		['reflect', 'say, show'],
		['regarding', 'about, of, on'],
		['relative to', 'about, on'],
		['relocate', 'move'],
		['remain', 'stay'],
		['remain', 'stay'],
		['remainder', 'rest'],
		['remuneration', 'pay, payment'],
		['render', 'give, make'],
		['represents', 'is'],
		['request', 'ask'],
		['require', 'must, need'],
		['requirement', 'need'],
		['reside', 'live'],
		['retain', 'keep'],
		['said, some, such', 'the, this, that'],
		['selection', 'choice'],
		['set forth in', 'in'],
		['similar to', 'like'],
		['solicit', 'ask for, request'],
		['state-of-the-art', 'latest'],
		['subject', 'the, this, your'],
		['submit', 'give, send'],
		['subsequent', 'later, next'],
		['subsequently', 'after, later, then'],
		['substantial', 'large, much'],
		['successfully complete', 'complete, pass'],
		['sufficient', 'enough'],
		['terminate', 'end, stop'],
		['therefore', 'so'],
		['therein', 'there'],
		['thereof', 'its, their'],
		['the undersigned', 'I'],
		['this activity, command', 'us, we'],
		['timely', 'prompt'],
		['time period', 'time, period'],
		['transmit', 'send'],
		['under the provisions of', 'under'],
		['until such time as', 'until'],
		['utilize, utilization', 'use'],
		['validate', 'confirm'],
		['viable', 'practical, workable'],
		['vice', 'instead of, versus'],
		['warrant', 'call for, permit'],
		['whereas', 'because, since'],
		['with reference to', 'about'],
		['with the exception of', 'except for'],
		['witnessed', 'saw'],
		['your office', 'you']
	]),
	new Set<string>(),
	validatorIncludes);

const simpleWordsAndPhrases2 = new WordList(
	'Simple words and phrases',
	FeedbackType.Suggestion,
	'Please review the word above and check if it should be removed.',
	'https://www.plainlanguage.gov/guidelines/words/use-simple-words-phrases/',
	'Use simple words and phrases - Plain language guidelines',
	new Map<string, string>(),
	new Set<string>(['addressees are requested', 'be advised', 'inter alia', 'in the process of', 'procure', 'take action to', 'the month of', 'the use of', 'on a regular basis', 'type']),
	validatorIncludes);


export const wordListArray: WordList[] = [
	transitionWordsAdd,
	transitionWordsExample,
	transitionWordsRephrasing,
	transitionWordsResult,
	transitionWordsContrasting,
	transitionWordsSummingUp,
	transitionWordsSequencing,
	prepositions,
	prepositions2,
	doubletsTriplets,
	excessModifiers,
	legalJargon,
	businessJargon,
	shallMust,
	examples,
	examples2,
	simpleWordsAndPhrases,
	simpleWordsAndPhrases2
];