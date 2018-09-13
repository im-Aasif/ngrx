import { initialState } from '../state/app.state';
import * as TodoActions from '../actions/todos.action';
import { Todo } from '../models/todo.model';

export function todoReducer(state: Todo[] = initialState.todos, action: TodoActions.Actions) {
    switch (action.type) {
        case TodoActions.TodosActionType.TODOS_REQUEST:
            return state;
        case TodoActions.TodosActionType.TODOS_REQUEST_SUCCESS:
            return [...state, ...action.payload];
    }
}
