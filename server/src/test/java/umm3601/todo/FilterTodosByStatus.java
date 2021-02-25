package umm3601.todo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.IOException;
import java.util.HashMap;

import org.junit.jupiter.api.Test;

public class FilterTodosByStatus {
@Test
  public void filterTodosByStatus() throws IOException {
    TodoDatabase db = new TodoDatabase("/todos.json");
    Todo[] allTodos = db.listTodos(new HashMap<>());

    Todo[] TrueTodos = db.filterTodosByStatus(allTodos, true);
    assertEquals(143, TrueTodos.length, "Incorrect number of todos that are complete");

    Todo[] FalseTodos = db.filterTodosByStatus(allTodos, false);
    assertEquals(157, FalseTodos.length, "Incorrect number of todos that are incomplete");
  }
}
