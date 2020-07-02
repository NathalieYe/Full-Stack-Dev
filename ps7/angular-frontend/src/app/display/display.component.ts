import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input('book') book: any;
  @Input('cache') cache: any;
  @Input('author') author: any;



  constructor() { }

  ngOnInit(): void {
  }

}
