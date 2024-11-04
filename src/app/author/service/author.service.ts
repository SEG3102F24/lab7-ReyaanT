import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/author';


const baseUrl = 'http://localhost:8080/books-api/authors';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) {}


  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${baseUrl}/${id}`);
  }


  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(baseUrl);
  }
}


