import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as PostsActions from '../actions/post.action';
import * as TodoActions from '../actions/todos.action';
import { Post } from '../models/post.model';
import { Todo } from '../models/todo.model';

@Injectable()
export class PostEffects {
    constructor(
        private actions$: Actions,
        private service: JsonPlaceholderService
    ) { }

    @Effect()
    getPosts$: Observable<Action> = this.actions$.pipe(
        ofType(PostsActions.REQUEST_POSTS),
        switchMap((_) => {
            return this.service.getPosts();
        }),
        map((posts: Post[]) => {
            return new PostsActions.PostRequestSuccess(posts);
        })
    );

    @Effect()
    getTodos$: Observable<Action> = this.actions$.pipe(
        ofType(TodoActions.TodosActionType.TODOS_REQUEST),
        switchMap((_) => {
            return this.service.getTodos();
        }),
        map((todos: Todo[]) => {
            return new TodoActions.TodoRequestSuccess(todos);
        })
    );
}
