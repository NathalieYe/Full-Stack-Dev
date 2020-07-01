import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  baseURL: string = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author="
  constructor(private http: HttpClient) { }

  getBook() {
        return this.http.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author=haruki_murakami&api-key=OlCXYuB2sp4Z5lWGZqcZBIvc0FxU73wq');
    // return this.http.get('https://localhost:3000/books/author')
  }

  getBookByAuthor(author: string) {
    console.log(`in getBookByAuthor`)
    return this.http.get(this.baseURL + author + "&api-key=OlCXYuB2sp4Z5lWGZqcZBIvc0FxU73wq")
    //   return this.http.get('https://localhost:3000/books/author')

  }

  getBookByFormGroup(form: FormGroup) {
    console.log(`in getBookByFormGroup`)
    let author = form.value.authorControl;
    return this.http.get(this.baseURL + author + "&api-key=OlCXYuB2sp4Z5lWGZqcZBIvc0FxU73wq")
      // return this.http.get('https://localhost:3000/books/author')
  }
}
