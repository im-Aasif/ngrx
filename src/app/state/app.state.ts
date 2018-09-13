import { Tutorial } from './../models/tutorial.model';
import { Post } from '../models/post.model';
import { Todo } from '../models/todo.model';

export interface AppState {
    readonly tutorial: Tutorial[];
    readonly posts: Post[];
    readonly todos: Todo[];
}

export const initialState: AppState = {
    todos: [],
    tutorial: [],
    posts: []
};
