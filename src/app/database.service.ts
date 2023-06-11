import { Injectable, OnInit } from '@angular/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { AddTodo, DeleteTodo } from './dashboard/todo.actions';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit {
  constructor(private store: Store<AppState>) {}

  id: any = localStorage.getItem('id');
  task: any;
  status: any;
  todo: any[] = [];

  ngOnInit() {
    this.get();console.log('sa');
  }

  show() {
    this.save();
  }

  clearAll() {
    this.todo.length = 0;
    this.id = 0;
    localStorage.clear()
    this.save();
  }

  save() {
    if (this.todo) {
      // localStorage.setItem('todo', JSON.stringify(this.todo));
    }
    if (this.id) {
      localStorage.setItem('id', this.id);
    }
  }

  complete(id: any) {
    var index = this.todo.findIndex((a: { id: any }) => a.id === id);
    this.status = this.todo[index].status == 0 ? 1 : 0;
    this.todo[index].status = this.status;
    this.save();
  }

  update(id: any, task: any, status: any, index: any) {
    task = task.trim();
    if (task.length > 0) {
      var data = this.todo;
      data[index] = { id, task, status };
      this.save();
      return true;
    } else {
      return false;
    }
  }

  add(task: any) {
    task = task.trim();
    if (task.length > 0) {
      var id = this.id++;
      this.status = 0;
      var data = this.todo;
      this.store.dispatch(
        new AddTodo([{
          id,
          task,
          status: 0
        }])
      );
      data.push({ id, task, status: 0 });
      this.save();
      return true;
    } else {
      return false;
    }
  }

  get() {
    if (this.todo) {
      // this.todo = JSON.parse(localStorage.getItem('todo') || '[]');
    }
    if (this.id) {
      this.id = localStorage.getItem('id') || '';
    }
  }

  remove(t: any) {
    this.store.dispatch(
      new DeleteTodo({
        t,
    
      })
    );
    this.todo.splice(
      this.todo.findIndex((a: { id: any }) => a.id === t),
      1
    );
    this.save();
  }
}
