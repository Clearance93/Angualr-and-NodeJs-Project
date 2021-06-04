import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { OnlinetestService } from '../onlinetest.service';

@Component({
  selector: 'app-onlinetest',
  templateUrl: './onlinetest.component.html',
  styleUrls: ['./onlinetest.component.css']
})
export class OnlinetestComponent implements OnInit {
 
  pic: string = "assets/images/gadgets.png";
  pic1: string = "assets/images/download (7).jpg";

  quizzes: Quiz[] = [];

  currentQuiz = 0
  answerSelected = false;
  correctAnswer = 0;
  incorrectAnswer = 0;

  randomize!: number;

  results = false;


  constructor( private quizService: OnlinetestService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();

    // this.randomize = Math.floor(Math.random() * this.quizzes.length)
  }


  onAnswer(option: boolean){
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      // this.randomize = Math.floor(Math.random() * this.quizzes.length)
      this.answerSelected = false;
    }, 1000);

    if(option){
      this.correctAnswer++;
    }
    else{
      this.incorrectAnswer++;
    }
  }

  showResults(){
    this.results = true;
  }

}
