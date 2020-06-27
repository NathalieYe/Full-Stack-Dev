import { Component } from '@angular/core';
import { HARUKI } from './data/haruki-murakamiMOCK';
import { HARUKIBOOK } from './data/haruki-murakami';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Haruki Murakami's Bestsellers on New York Times";
  haruki: HARUKIBOOK[] = HARUKI;
  selectedBook: HARUKIBOOK;

  showDescription(title: string) {
    this.selectedBook = this.haruki.find(name => name.title === title);
  }
}
