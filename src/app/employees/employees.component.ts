import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  pic: string = "assets/images/A58BD878-E8B0-4EFA-99E8-D2A3C5DD3CC4 3.png";
  pic1: string = "assets/images/abstract-background-design-vector-6684225.jpg";
  pic2: string = "assets/images/go_w01_grader_h3_Media.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
