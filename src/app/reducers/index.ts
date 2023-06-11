import { isDevMode } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { TodoActionTypes, AddTodo, DeleteTodo } from '../dashboard/todo.actions';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from '../serializer';

export interface Todo {
  id: number;
  status: number;
  task: string;
}

export interface AppState {
  todos: Todo[];
  router: RouterReducerState<RouterStateUrl>;
}

const initialTodoState: Todo[] =[]
//  [{ id: 0,
//   status: 0,
//   task: ''}]; 
  // Change initial state to an array

export function todoReducer(state: Todo[] = initialTodoState, action: Action): Todo[] {
  // console.log('state: ', state);
  // console.log('action: ', action);
  switch (action.type) {
    case TodoActionTypes.AddTodo:
      const addTodoAction = action as AddTodo;
      console.log('addTodoAction: ', addTodoAction);
      // return [addTodoAction.payload]
      if (Array.isArray(addTodoAction.payload)) {
        // If payload is an array, add each todo separately to the state
        const todosToAdd = addTodoAction.payload.flat(); // Flatten the payload array
        console.log('todosToAdd: ', todosToAdd);

  return [...state, ...todosToAdd];
      } else {
        // If payload is a single todo, add it to the state
        return [...state, addTodoAction.payload];
      }
      case TodoActionTypes.DeleteTodo:
        const deleteTodoAction = action as DeleteTodo;
        console.log('deleteTodoAction: ', deleteTodoAction);
        console.log('state: ', state);
        const todoIndex = state.findIndex((todo) => todo.id === deleteTodoAction.payload.t);
        console.log('todoIndex: ', todoIndex);
        if (todoIndex !== -1) {
          return state.filter((_, index) => index !== todoIndex);
        }
        return state;
  
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [storeFreeze] : [];
