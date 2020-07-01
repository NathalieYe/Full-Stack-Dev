import { Component, OnInit } from '@angular/core';
import {HARUKIBOOK} from '../data/haruki-murakami';
import {HARUKI} from '../data/haruki-murakamiMOCK';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {BookServiceService as BookService} from '../book-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = "Bestsellers on New York Times";
  haruki: HARUKIBOOK[] = HARUKI;
  selectedBook: HARUKIBOOK;

  bookInformation = {
    title: "null",
    description: "null",
    publisher: "null"
  };

  author: string;

  authorControl2: FormControl = new FormControl('haruki murakami', Validators.required);

  // bookFormGroup: FormGroup = new FormGroup({
  //   authorControl: new FormControl('haruki murakami', Validators.required)
  // });
  bookFormGroup = this.form.group({
    authorControl: ['haruki murakami', Validators.minLength(1)]
  })

  //Addition stuff: use formBuilder serivce as a quick way to ste up a form group
  ///needs FormBuilder service injected

  // showDescription(title: string) {
  //   this.selectedBook = this.haruki.find(name => name.title === title);
  // }

  constructor(private bookService: BookService, private form: FormBuilder) {}

  getBook() {
    this.bookService.getBook().subscribe(
      response => {
        this.bookInformation = response['results'][0]['title'];
      }
    );
  }

  getBookByAuthor() {
    this.bookService.getBookByAuthor(this.author).subscribe(
      response => {
        this.bookInformation = response['results'][0];
        // console.log(`result looks like this ${response['results'][0]}`)
        this.bookInformation = {
          title: response['results'][0]['title'],
          description: response['results'][0]['description'],
          publisher: response['results'][0]['publisher']
        }
      }
    );
  }

  getBookByAuthorWay2() {
    this.bookService.getBookByAuthor(this.authorControl2.value).subscribe(
      response => {
        this.bookInformation = response['results'][0];
        // console.log(`result looks like this ${response['results'][0]}`)
        this.bookInformation = {
          title: response['results'][0]['title'],
          description: response['results'][0]['description'],
          publisher: response['results'][0]['publisher']
        }
      }
    );
  }

  getBookByAuthorWay3() {
    this.bookService.getBookByFormGroup(this.bookFormGroup).subscribe(
      response => {
        this.bookInformation = response['results'][0];
        // console.log(`result looks like this ${response['results'][0]}`)
        this.bookInformation = {
          title: response['results'][0]['title'],
          description: response['results'][0]['description'],
          publisher: response['results'][0]['publisher']
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
