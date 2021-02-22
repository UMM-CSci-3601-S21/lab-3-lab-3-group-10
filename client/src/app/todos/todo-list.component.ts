import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService  } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];

  constructor(private todoService: TodoService) { }

  getTodosFromServer() {
    this.todoService.getTodos().subscribe(returnedTodos => {
      this.todos = returnedTodos;
    });
  }

  ngOnInit(): void {
    this.getTodosFromServer();
  }

}
