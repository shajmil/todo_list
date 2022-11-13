import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  show(){
    this.save();
  }
id=4
task:any
status:any

  todo:any=[
   
  //  {
  //     "id":"1","task":"reading book","status":0
  //   },
  //  {
  //     "id":2,"task":"cleaning","status":1
  //   },
  //   {
  //     "id":3,"task":"study","status":0
  //   },
   ]

save(){

 if(this.todo){
  localStorage.setItem('todo',JSON.stringify( this.todo ));
 }
 


}
add(task:any){
  task=task.trim()
  if(task.length>0){


  // console.log('task: ', task);
var id = this.id++
this.status=0
// console.log('status: ', status);
var data=this.todo
// console.log(id);

data.push(
  {
    id,task,status:this.status
  })
  // console.log('data: ', data);

this.save()
return true
}
else{
  return false
}  }
get(){
  if(this.todo){
console.log(localStorage.getItem('todo')||' ');
    this.todo= JSON.parse(localStorage.getItem('todo')||' ')
   
  }
}
remove(t:any){
var index =t[0]
this.todo.splice(index,1)
this.save()
}

  constructor() { 
    this.save()
    this.get()
    // alert('hi')
  }
}
