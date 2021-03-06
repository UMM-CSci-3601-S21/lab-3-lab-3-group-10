import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly todoUrl: string = environment.apiUrl + 'todos';


  constructor(private httpClient: HttpClient) { }

  getTodos(filters?: { owner?: string; category?: string; body?: string}): Observable<Todo[]>{
    let httpParams: HttpParams = new HttpParams();
    if (filters) {
      if (filters.owner) {
        httpParams = httpParams.set('owner', filters.owner);
      }
      if (filters.category) {
        httpParams = httpParams.set('category', filters.category);
      }
      if (filters.body) {
        httpParams = httpParams.set('body', filters.body);
      }
    }

    return this.httpClient.get<Todo[]>(this.todoUrl, {
      params: httpParams,
    });
  }
  filterTodos(todos: Todo[],filters: { owner?: string; category?: string; body?: string }): Todo[] {
    let filteredTodos = todos;

    //Filter by owner
    if (filters.owner){
      filters.owner = filters.owner.toLowerCase();

      filteredTodos = filteredTodos.filter(todo => todo.owner.toLowerCase().indexOf(filters.owner) !== -1);
    }

    //Filter by category
    if (filters.category) {
      filters.category = filters.category.toLowerCase();

      filteredTodos = filteredTodos.filter(todo => todo.category.toLowerCase().indexOf(filters.category) !== -1);
    }

    //Filter by body
    if (filters.body) {
      filters.body = filters.body.toLowerCase();

      filteredTodos = filteredTodos.filter(todo => todo.body.toLowerCase().indexOf(filters.body) !== -1);
    }

    return filteredTodos;
  }
}
