import { Action } from '@ngrx/store';
import { Post } from '../models/post.model';

export const GET_POST = '[Post] Request Success';
export const REQUEST_POSTS = '[Post] Request';

export class PostRequest implements Action {
    readonly type = REQUEST_POSTS;
}

export class PostRequestSuccess implements Action {
    readonly type = GET_POST;
    constructor(public payload: Post[]) {}
}

export type Actions = PostRequestSuccess | PostRequest;
