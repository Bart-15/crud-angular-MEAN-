import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UiService} from '../../services/ui.service'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter
  showForm!: boolean;
   title : string = "" ;
   constructor(private uiService: UiService) { 
      this.uiService.onToggle().subscribe(value => this.showForm = value)
   }

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
