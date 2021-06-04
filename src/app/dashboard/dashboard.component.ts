import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pic: string = "assets/images/go_w01_grader_h3_Media.jpg";
  pic1: string = "assets/images/download (2).png";
  pic2: string = "assets/images/download (7).jpg";
  pic3: string = "assets/images/download98).jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
