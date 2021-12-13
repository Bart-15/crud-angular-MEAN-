import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'
import {UiService} from '../../services/ui.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any;
  errors: any;
  showForm!: boolean;
  subscription?: Subscription;
  constructor(private todoService: TodoService, private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showForm = value)

  }

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

  toggleAddTodo() : void {
    this.uiService.toggleAddTodo()
  }

  toggleCompleted(todo:Object)  : void {
    this.todoService.toggleCompleted(todo)
      .subscribe(res => this.fetchTodos())
  }

  
}
