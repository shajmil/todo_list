import { Action } from '@ngrx/store';
import { Todo } from '../reducers';

export enum TodoActionTypes {

  AddTodo = '[Todo] Add Todo',
  DeleteTodo = '[Todo] Delete Todo',

}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: any) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;


  constructor(public payload: Todo[]) {}

}

export type TodoActions =AddTodo|DeleteTodo
