import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

describe('TodoService', () => {

   // A small collection of test todos
   const testTodos: Todo[] = [
     {
      _id: '1234',
      owner: 'Nic',
      status: true,
      body: 'test todo number one',
      category: 'test-todo-1',
     },
     {
      _id: '12345',
      owner: 'Natasha',
      status: false,
      body: 'test todo number two',
      category: 'test-todo-2',
     },
     {
      _id: '123456',
      owner: 'Alice',
      status: true,
      body: 'test todo number three',
      category: 'test-todo-3',
     },
    ];
  let todoService: TodoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    todoService = new TodoService(httpClient);
  });

  describe('getTodos()', () => {

    it('calls `api/todos` when `getTodos()` is called with no parameters', () => {
      // Assert that the todos we get from this call to getTodos()
      // should be our set of test todos. Because we're subscribing
      // to the result of getTodos(), this won't actually get
      // checked until the mocked HTTP request 'returns' a response.
      // This happens when we call req.flush(testTodos) a few lines
      // down.
      todoService.getTodos().subscribe(
        todos => expect(todos).toBe(testTodos)
      );

  // Specify that (exactly) one request will be made to the specified URL with the role parameter.
  const req = httpTestingController.expectOne(
    (request) => request.url.startsWith(todoService.todoUrl)
  );

  //Check that the request made to that URL was a GET request.
  expect(req.request.method).toEqual('GET');

  req.flush(testTodos);

    });

  });

  describe('filterTodos()', () => {
    /*
     * Since `filterTodos` actually filters "locally" (in
     * Angular instead of on the server), we do want to
     * confirm that everything it returns has the desired
     * properties. Since this doesn't make a call to the server,
     * though, we don't have to use the mock HttpClient and
     * all those complications.
     */
    it('filters by owner', () => {
      const ownerName = 'i';
      const filteredTodos = todoService.filterTodos(testTodos, { owner: ownerName });
      // There should be two owners with an 'i' in their
      // owner: Nic and Alice.
      expect(filteredTodos.length).toBe(2);
      // Every returned owner's name should contain an 'i'.
      filteredTodos.forEach(todo => {
        expect(todo.owner.indexOf(ownerName)).toBeGreaterThanOrEqual(0);
      });
    });
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });
});
