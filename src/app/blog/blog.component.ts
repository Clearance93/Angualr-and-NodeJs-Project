import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  pic: string = "assets/images/advantages of tech.jpg";
  pic1: string = "assets/images/future shock.jpg";
  pic2: string = "assets/images/gadgets.png";
  pic3: string = "assets/images/go_w01_grader_h3_media.jpg";
  pic4: string = "assets/images/high tech brain.jpg";
  pic5: string = "assets.images/ICT.png";
  pic6: string = "assets/images/modern.jpg";
  pic7: string = "assets/images/morden technology.png";
  pic8: string = "assets/images/tech cars.jpg";
  pic9: string = "assets/images/tech tree.png";

  constructor() { }

  ngOnInit(): void {
  }

}
