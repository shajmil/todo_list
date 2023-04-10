
export class DatabaseService {
  show() {
    this.save();
  }
  id: any = localStorage.getItem('id');
  task: any;
  status: any;

  todo: any = [];

  //  {
  //     "id":"1","task":"reading book","status":0
  //   },
  //  {
  //     "id":2,"task":"cleaning","status":1
  //   },
  //   {
  //     "id":3,"task":"study","status":0
  //   },

  clearAll() {
    this.todo.length = 0;
    this.id = 0;
    this.save();
  }
  save() {
    if (this.todo) {
      localStorage.setItem('todo', JSON.stringify(this.todo));
    }
    if (this.id) {
      localStorage.setItem('id', this.id);
    }
  }

  complete(id: any) {
    var index = this.todo.findIndex((a: { id: any }) => a.id === id);
    // console.log('index: ', index);
    this.status = this.todo[index].status == 0 ? 1 : 0;
    this.todo[index].status = this.status;
    // console.log('this.todo[index].status: ', this.todo[index]);
    this.save();
    // console.log(this.todo);
  }

  update(id: any, task: any, status: any, index: any) {
    task = task.trim();
    if (task.length > 0) {
      // console.log('task: ', task);

      // console.log('status: ', status);
      var data = this.todo;
      // console.log(id);

      data[index] = {
        id,
        task,
        status,
      };
      // console.log(data);
      //  data.map((i: { id: any; })=>console.log(i));

      this.save();
      return true;
    } else {
      return false;
    }
  }

  add(task: any) {
    task = task.trim();
    if (task.length > 0) {
      // console.log('task: ', task);
      var id = this.id++;
      this.status = 0;
      // console.log('status: ', status);
      var data = this.todo;
      // console.log(id);

      data.push({
        id,
        task,
        status: 0,
      });
      // console.log(data);
      //  data.map((i: { id: any; })=>console.log(i));

      this.save();
      return true;
    } else {
      return false;
    }
  }
  get() {
    if (this.todo) {
      // console.log(localStorage.getItem('todo')||' ');
      this.todo = JSON.parse(localStorage.getItem('todo') || '[]');
    }
    if (this.id) {
      // console.log(localStorage.getItem('todo')||' ');
      this.id = localStorage.getItem('id') || ' ';
    }
  }
  remove(t: any) {
    // console.log
    // ('index: ', t);
    this.todo.splice(
      this.todo.findIndex((a: { id: any }) => a.id === t),
      1
    );
    // this.todo.splice(t,1)
    this.save();
  }

  constructor() {
    // this.save()
    this.get();
    // alert('hi')
    // console.log(this.id);
  }
}
