import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = "http://localhost:5000/api/todo"

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<any> {
    return this.http.get(baseUrl)
  }  

  deleteTodo(todo: any): Observable<any> {
    const url = `${baseUrl}/${todo._id}`
    return this.http.delete(url)
  }

  addTodo(data: Object): Observable<any> {
    return this.http.post(baseUrl, data, httpOptions)
  }
}
