import { createSelector } from '@ngrx/store';
import { AppState } from './reducers/index';

// Define a selector to retrieve the todos array from the state
export const getTodos = createSelector(
  (state: AppState) => state.todos,
  todos => todos
);
