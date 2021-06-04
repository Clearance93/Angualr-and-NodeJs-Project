import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pic1: string = "assets/images/whatsapp.png";
  pic2: string ="assets/images/facebook-new--v2.png";
  pic3: string = "assets/images/instagram-new (1).png";
  pic4: string = "assets/images/linkedin (1).png";
  pic5: string = "assets/images/twitter (1).png";
  pic6: string = "assets/images/youtube (1).png";
  constructor() { }

  ngOnInit(): void {
  }

}
