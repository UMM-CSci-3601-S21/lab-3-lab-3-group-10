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

  getTodos(): Observable<Todo[]>{
    const httpParams: HttpParams = new HttpParams();

    return this.httpClient.get<Todo[]>(this.todoUrl, {
      params: httpParams,
    });
  }
}
