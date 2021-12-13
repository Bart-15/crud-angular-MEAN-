import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todo: any;
  @Output() onDeleteTodo: EventEmitter<any> = new EventEmitter;
  @Output() onToggleCompleted: EventEmitter<any> = new EventEmitter

  toggleCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(todo: Object): void {
    this.onDeleteTodo.emit(todo);
  }

  toggleCompleted(todo: Object) {
    this.toggleCounter  = this.toggleCounter + 1;
      if(this.toggleCounter === 2) {
        this.toggleCounter = 0;
        this.onToggleCompleted.emit(todo);
      }
  }
}
