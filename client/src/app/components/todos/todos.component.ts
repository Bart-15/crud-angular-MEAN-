import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any;
  errors: any;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.fetchTodos()
  }


  fetchTodos(): void {
    this.todoService.getAllTodos()
      .subscribe(todos => this.todos = todos)
  }

  deleteTodo(todo: any): void {
    this.todoService.deleteTodo(todo)
      .subscribe(() => {
        (this.todos = this.todos.filter((item:any) => item.id !== todo.id))
        this.fetchTodos()
      })
  }

  addTodo(data: Object): void {
    this.todoService.addTodo(data)
     .subscribe(res => this.fetchTodos())
  }
}
