import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from './todo';
import { TodoService  } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];
  public filteredTodos: Todo[];
  public limitTodos: Todo[];
  public ownerName: string;
  public todoStatus: boolean;
  public todoBody: string;
  public todoCategory: string;
  serverFilteredTodos: Todo[];

  constructor(private todoService: TodoService, private snackBar: MatSnackBar) { }

  getTodosFromServer() {
    this.todoService.getTodos({
      owner: this.ownerName,
    }).subscribe(returnedTodos => {
      this.serverFilteredTodos = returnedTodos;
      this.updateFilter();
    }, err => {
      this.snackBar.open(
        'Problem contacting the server – try again',
        'OK',
        // The message will disappear after 3 seconds.
        { duration: 3000 });
    });
  }

  public updateFilter() {
    this.filteredTodos = this.todoService.filterTodos(
      this.serverFilteredTodos, { owner: this.ownerName, category: this.todoCategory, body: this.todoBody });
  }


  ngOnInit(): void {
    this.getTodosFromServer();
  }

}
