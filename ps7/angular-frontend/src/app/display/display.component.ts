import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  bookInformation = {
    title: "null",
    description: "null",
    publisher: "null"
  };

  author: string;



  constructor() { }

  ngOnInit(): void {
  }

}
