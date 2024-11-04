import { Component } from '@angular/core';
import { AuthorService } from './service/author.service';
import { Author } from './model/author';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AuthorComponent {
  authorId: number = 0;
  authorData: Author | null = null;
  errorMessage: string | null = null;


  constructor(private authorService: AuthorService) {}


  searchAuthor() {
    this.authorService.getAuthorById(this.authorId).subscribe({
      next: (data: Author) => {
        this.authorData = data;
        this.errorMessage = null;
      },
      error: () => {
        this.authorData = null;
        this.errorMessage = 'Author not found';
      }
    });
  }
}
