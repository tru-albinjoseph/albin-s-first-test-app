import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // title="todos";
  todos:Todo[]

inputTodo:string = ""

  constructor() { this.todos= [] }

  ngOnInit(): void {
    this.todos = [
      // {
      //   content: '(SampleDemo) First todo',
      //   completed: false
      // },
      // {
      //   content: '(Sample Demo) Second todo',
      //   completed: true
      // }
    ]
  }
  
  toggleDone(id:number) {
    this.todos.map((v, i) => {
      if(i==id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id:number) {
    this.todos = this.todos.filter((v,i) => i !==id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
  
    });
    this.inputTodo = "";

  }

}
