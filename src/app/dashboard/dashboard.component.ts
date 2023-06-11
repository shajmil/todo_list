import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Store, select } from '@ngrx/store';
import { AppState, Todo } from '../reducers';
import { AddTodo } from './todo.actions';
import { getTodos } from '../get-todo.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  i=0
  index:any
  st:any
todo:any
id:any
task:any
editable:any=false
al:any=true
compl:any=false
pen:any=false
view:any=false
todos$: Observable<Todo[]>;
  constructor(private ds:DatabaseService, private store:Store<AppState>) {
    this.todos$ = this.store.pipe(select(getTodos));
    console.log(' this.todos$: ',  this.todos$);
    this.todos$.subscribe(todos => {
      // Access the value of this.todos$ here
      console.log(todos);
    });
    this.store.subscribe(res=>{
      console.log('res: ', res);
      this.todo=res['todos']


    })
    // this.todo = this.ds.todo
  console.log(this.todo);
   }

  ngOnInit(): void {
  }
// show(t:any){console.log(t)};

all(){
  this.ds.clearAll();
}
check(t:any){
this.ds.complete(t.id)
this.i=1
  // console.log(t.id);
}
delete(t:any){
  
this.ds.remove(t.id)
}
save(){
  // this.store.dispatch(new AddTodo(this.task))
  let result=this.ds.add(this.task)
  this.view=true;
  this.task=' '
  // result?alert('sucesss'):alert('please fill todo list')
}


update(t:any){
  // console.log(this.todo);
  var task=t.task;
  // console.log('t: ', t);
  this.id=t.id;
  // console.log('this.ind: ', this.ind);
  
  this.st=t.status
  // console.log('this.st: ', this.st);
  this.index = this.todo.findIndex((a: { id: any; }) => a.id === this.id)
  // console.log('this.index: ', this.index);

  let r=document.getElementById('input')?.innerHTML==""?task:' '
  this.task=r
  this.editable=true
  // console.log(' document.getElementById ',  document.getElementById('input'));
  // console.log(input);
}
uptd(){
  this.ds.update(this.id,this.task,this.st,this.index);
  this.task=' '
  this.editable=false
}

allchange(){
  this.al=true;
  this.compl=false;
  this.pen=false
}


cmpchange(){
  this.al=false;
  this.compl=true;
  this.pen=false
}

penchange(){
  this.al=false;
  this.compl=false;
  this.pen=true
}
once(){
  this.i++;
return this.i==1?true:false;
// console.log('this.i: ', this.i);

}

}
