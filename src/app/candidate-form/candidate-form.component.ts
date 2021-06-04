import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  pic: string = "assets/images/download (7).jpg";
  pic1: string = "assets/images/download (8).jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
