import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../app/todos/todo';
import { TodoService } from '../app/todos/todo.service';

/**
 * A "mock" version of the `TodoService` that can be used to test components
 * without having to create an actual service.
 */
@Injectable()
export class MockTodoService extends TodoService {
  static testTodos: Todo[] = [
    {
      _id: 'chris_id',
      owner: 'chris',
      status: true,
      body: 'string',
      category: 'test todos',
    },
    {
      _id: 'pat_id',
      owner: 'pat',
      status: false,
      body: 'string',
      category: 'test todos',
    },
    {
      _id: 'jamie_id',
      owner: 'jamie',
      status: true,
      body: 'string',
      category: 'test todos',
    },
  ];

  constructor() {
    super(null);
  }

  getTodos(): Observable<Todo[]> {
    // Our goal here isn't to test (and thus rewrite) the service, so we'll
    // keep it simple and just return the test todos regardless of what
    // filters are passed in.
    return of(MockTodoService.testTodos);
  }

  // getUserById(id: string): Observable<Todo> {
  //   // If the specified ID is for the first test user,
  //   // return that user, otherwise return `null` so
  //   // we can test illegal user requests.
  //   if (id === MockTodoService.testTodos[0]._id) {
  //     return of(MockTodoService.testTodos[0]);
  //   } else {
  //     return of(null);
  //   }
  //}

}
