import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ButtonComponent } from './components/button/button.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

const routes : Routes = [
    { 
      path:'',
      component: TodosComponent
    },
    {
      path:'edit-todo/:id',
      component: EditTodoComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    AddTodoComponent,
    ButtonComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
