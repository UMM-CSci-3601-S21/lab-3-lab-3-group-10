export class TodoListPage {
  navigateTo() {
    return cy.visit('/todos');
  }
  getTodoTitle() {
    return cy.get('.todo-list-title');
  }
  getTodoCards() {
    return cy.get('.todo-cards-container .todo-card');
  }
}
