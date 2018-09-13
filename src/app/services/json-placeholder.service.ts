import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    console.log('JsonPlaceholderService: getPosts()');
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/');
  }

  getTodos(): Observable<Todo[]> {
    console.log('JsonPlaceholderService: getTodos()');
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}
