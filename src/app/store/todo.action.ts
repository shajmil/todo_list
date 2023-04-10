import { createAction, props } from '@ngrx/store';
import { todo } from '../model/store.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: todo[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());
