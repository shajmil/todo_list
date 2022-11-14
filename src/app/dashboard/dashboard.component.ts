import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  i=0
todo:any
task:any
al:any=true
compl:any=false
pen:any=false
view:any=false
 
  constructor(private ds:DatabaseService) {
    
    this.todo= this.ds.todo
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
  
  let result=this.ds.add(this.task)
  this.view=true;
  this.task=' '
  // result?alert('sucesss'):alert('please fill todo list')
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
