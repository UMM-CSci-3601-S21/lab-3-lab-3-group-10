import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

describe('TodoService', () => {

   // A small collection of test todos
   const testTodo: Todo[] = [
     {
      _id: '1234',
      owner: 'Nic',
      status: true,
      body: 'test todo number one',
      category: 'test-todo',
     },
     {
      _id: '12345',
      owner: 'Natasha',
      status: false,
      body: 'test todo number two',
      category: 'test-todo',
     },
     {
      _id: '123456',
      owner: 'Alice',
      status: true,
      body: 'test todo number three',
      category: 'test-todo',
     },
    ];
  let service: TodoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TodoService);
  });

  // // Specify that (exactly) one request will be made to the specified URL with the role parameter.
  // const req = httpTestingController.expectOne(
  //   (request) => request.url.startsWith(service.todoUrl)
  // );

  // Check that the request made to that URL was a GET request.
  // expect(req.request.method).toEqual('GET');

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
