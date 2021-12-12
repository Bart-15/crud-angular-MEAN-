import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todo: any;
  @Output() onDeleteTodo: EventEmitter<any> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(todo: any): void {
    this.onDeleteTodo.emit(todo);
  }
}
