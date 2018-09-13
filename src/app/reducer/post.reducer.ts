import { Action } from '@ngrx/store';
import * as PostActions from './../actions/post.action';
import { Post } from './../models/post.model';
import { initialState } from '../state/app.state';

export function postReducer(state: Post[] = initialState.posts, action: PostActions.Actions) {

    switch (action.type) {
        case PostActions.REQUEST_POSTS:
            console.log('Inside PostActions.REQUEST_POSTS');
            return state;

        case PostActions.GET_POST:
            console.log('Inside PostActions.GET_POST');
            return action.payload;
        default:
            return state;
    }
}

