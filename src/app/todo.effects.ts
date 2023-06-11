import { Injectable, effect } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddTodo, TodoActionTypes } from './dashboard/todo.actions';
import { EMPTY, catchError, defer, map, of, tap, timer, withLatestFrom } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getTodos } from './get-todo.selectors';
import { AppState, Todo } from './reducers';



@Injectable()
export class TodoEffects {
  getTodo$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<AddTodo>(TodoActionTypes.AddTodo),
        tap((action) => {
          console.log('action: ', action);
  
          const todosFromLocalStorage = localStorage.getItem('todos');
          let todos: any = [];
  
          if (todosFromLocalStorage) {
            todos = JSON.parse(todosFromLocalStorage);
          }
  
          todos.push(...action.payload); // Spread the elements of action.payload
  
          localStorage.setItem('todos', JSON.stringify(todos));
        })
      ),
    { dispatch: false }
  );
  
  init$ = createEffect(() =>
    defer(() => {
      const todosFromLocalStorage = localStorage.getItem('todos');
  
      if (todosFromLocalStorage) {
        const parsedTodos = JSON.parse(todosFromLocalStorage);
        console.log('parsedTodos: ', parsedTodos);
        localStorage.removeItem('todos'); // Clear the localStorage before adding new todos
        return of(new AddTodo(parsedTodos));
      } else {
        return EMPTY;
      }
    })
  );
  
  


  constructor(private actions$: Actions,private store: Store<AppState>) {}
}
