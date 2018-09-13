
import { Action } from '@ngrx/store';
import { Todo } from './../models/todo.model';

export enum TodosActionType {
    TODOS_REQUEST = '[Todo] GET Request',
    TODOS_REQUEST_SUCCESS = '[Todo] GET Success'
}

export class TodoGetRequest implements Action {
    readonly type = TodosActionType.TODOS_REQUEST;
}

export class TodoRequestSuccess implements Action {
    readonly type = TodosActionType.TODOS_REQUEST_SUCCESS;
    constructor(public payload: Todo[]) { }
}

export type Actions = TodoGetRequest | TodoRequestSuccess;
