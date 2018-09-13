import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, MemoizedSelector, createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';
import * as PostActions from './../actions/post.action';
import * as TodoActions from './../actions/todos.action';
import { Post } from '../models/post.model';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;
  posts: Observable<Post[]>;
  todos: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
   // this.tutorials = store.select('tutorial');
  }

  deleteTutorial(index) {
    // this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  getPosts() {
    this.store.dispatch(new PostActions.PostRequest());
  }

  getTodos() {
    this.store.dispatch(new TodoActions.TodoGetRequest());
  }

  onTodoClick(todo) {
    console.log(JSON.stringify(todo, null, 2));
  }

  ngOnInit() {
    this.posts = this.store.select('post');
    this.todos = this.store.select('todos');
  }
}
