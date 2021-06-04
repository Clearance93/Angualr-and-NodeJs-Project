import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  quizzes: Quiz[] = [
    {
      question: 'What does HTML stand for?',
      answer: [
        {option: 'HyperText Mulltiple Langauge', correct: false},
        {option: 'HyperText Markup Langauge', correct: true},
        {option: 'HyperText Makeup Langauge', correct: false},
        {option: 'HypterText Multi Langauage', correct: false}
      ]
    },
    {
      question: 'What does CSS stand for?',
      answer: [
        {option: 'Common Style Sheet', correct: false},
        {option: 'Colorful Style Sheet', correct: false},
        {option: 'Computer Style Sheet', correct: false},
        {option: 'Cascading Style Sheet', correct: true}
      ]
    },
    {
      question: 'What Does PHP stand for?',
      answer: [
        {option: 'HyperText Preprocessor', correct: true},
        {option: 'HyperText Programming', correct: false},
        {option: 'HyperText Preprogramming', correct: false},
        {option: 'HyperText Processor', correct: false}
      ]
    },
    {
      question: 'What Does SQL stand for?',
      answer: [
        {option: 'Stylish Questions Langauge', correct: false},
        {option: 'Stylesheet Query Language', correct: false},
        {option: 'Statement Query Langauge', correct: false},
        {option: 'Structured Query Language', correct: true}
      ]
    },
    {
      question: 'What does XML stand for?',
      answer: [
        {option: 'eXtensible Multiple Langauge', correct: false},
        {option: 'eXtensible Markup langauge', correct: true},
        {option: 'eXtra Multiple Langauge', correct: false},
        {option: 'eXtra Multi-program Language', correct: false}
      ]
    },
    {
      question: 'Which of the following is not part of the back-end languages?',
      answer: [
        {option: 'Rubby', correct: false},
        {option: 'Java', correct: false},
        {option: 'HTML', correct: true},
        {option: 'mySql', correct: false}
      ]
    },
    {
      question: 'What is the main primary role of the full stack web developer?',
      answer: [
        {option: 'To organize data in the background.', correct: false},
        {option: 'To design user ineraction on websites, developing servers and database for websites functionality and codin.', correct: true},
        {option: 'To code, test and analyse all the appications including mobole, desktop and web applications.', correct: false},
        {option: 'To manage all the applications on the net/site.', correct: false}
      ]
    },
    {
      question: 'Which of the following is not part of quality of a full stack developer?',
      answer: [
        {option: 'Is aware of latest trends and development', correct: false},
        {option: 'Understand only stacks, none of different technlogy', correct: true},
        {option: 'Can point you to the right direction een if they cannot solve it', correct: false},
        {option: 'Is passionate and interested about learning new things', correct: false}
      ]
    },
    {
      question: 'A full stack developer is also known as an amalgation of langauges?', 
      answer: [
        {option: 'True', correct: true},
        {option: 'False', correct: false}
      ]
    },
    {
      question: 'The main difference between a web developer and a full stack is the languages they use, a full stack developer does not need to know the languages that a web developer knows', 
      answer: [
        {option: 'True', correct: false},
        {option: 'False', correct: true}
      ]
    }
  ]

  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
