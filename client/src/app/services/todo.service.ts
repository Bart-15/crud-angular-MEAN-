import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = "http://localhost:5000/api/todo"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<any> {
    return this.http.get(baseUrl)
  }  
}
