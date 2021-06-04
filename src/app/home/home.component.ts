import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pic: string = "assets/images/blog-pic-2.jpg";
  pic1: string = "assets/images/advantages of tech.jpg";
  pic2: string = "assets/images/ICT.png"

  constructor() { }

  ngOnInit(): void {
  }

}
