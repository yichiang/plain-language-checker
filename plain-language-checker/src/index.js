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
  constructor(text) {
    this.text = text;
    this.sentences = [];

    // Counters
    this.sentencesCount = 0;
    this.wordsCount = 0;
    this.transitionWordsCount = 0;
    this.examplesCount = 0;
  }
}

class Sentence {
  constructor(text) {
    this.text = text;
    this.words = [];

    // Counters
    this.wordsCount = 0;
    this.transitionWordsCount = 0;
    this.examplesCount = 0;
  }
}