import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class Text {
  constructor(text) {
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

class Paragraph {
  constructor(text, number) {
    this.text = text;
    // Paragraph number, starts at 1 for the first paragraph in the text
    this.number = number;
    this.sentences = [];

    // Counters
    this.sentencesCount = 0;
    this.wordsCount = 0;
    this.transitionWordsCount = 0;
    this.examplesCount = 0;
  }
}

class Sentence {
  constructor(text, number) {
    this.text = text;
    // Sentence number, starts at 1 for the first sentence in the paragraph
    this.number = number;
    this.words = [];
    this.feedback = [];

    // Counters
    this.wordsCount = 0;
    this.transitionWordsCount = 0;
    this.examplesCount = 0;
  }
}

class Feedback {
  constructor(name, feedbackType, link, linkText, description, matchedString, stringSuggestion = "") {
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

class Issue extends Feedback {
  constructor(name, link, linkText, description, stringIssue, stringSuggestion) {
    // The values below should be part of the metadata in the text file
    super(name, "Issue", link, linkText, description, stringIssue, stringSuggestion);
  }
}

class Suggestion extends Feedback {
  constructor(name, link, linkText, description, matchedString, stringSuggestion) {
    // The values below should be part of the metadata in the text file
    super(name, "Suggestion", link, linkText, description, matchedString, stringSuggestion);
  }
}

class Good extends Feedback {
  constructor(name, link, linkText, description, matchedString) {
    // The values below should be part of the metadata in the text file
    super(name, "Good", link, linkText, description, matchedString);
  }
}
