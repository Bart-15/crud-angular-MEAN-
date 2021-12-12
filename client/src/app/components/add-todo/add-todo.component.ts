import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter

   title : string = "" ;
   constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    if(!this.title) {
      return alert("This field must nit be empty!")
    }

    const newTodo = {
      title: this.title
    }

    this.onSubmit.emit(newTodo)
    this.title = ""

  }
}
