import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
todo:any
task:any
 
  constructor(private ds:DatabaseService) {
    
    this.todo= this.ds.todo
  
   }

  ngOnInit(): void {
  }
// show(t:any){console.log(t)};

all(){
  this.ds.clearAll();
}
check(t:any){
this.ds.complete(t.id)
  // console.log(t.id);
}
delete(t:any){
  
this.ds.remove(t.id)
}
save(){
  
  let result=this.ds.add(this.task)
  this.task=' '
  // result?alert('sucesss'):alert('please fill todo list')
}

}
