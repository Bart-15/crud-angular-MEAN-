import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
    id!: number;
    todo: any;
    constructor(private route:ActivatedRoute,private todoService: TodoService) { 
      this.route.params.subscribe(params => this.id = params['id'])
    }

  ngOnInit(): void {
    this.fetchSingleTodo()
  }


  fetchSingleTodo() : void {
    this.todoService.getSingleTodo(this.id)
      .subscribe(res => this.todo = res)
  }
}
