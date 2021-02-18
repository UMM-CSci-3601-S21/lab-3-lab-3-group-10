export class TodoListPage {
  getTodoCards() {
    return cy.get('.todo-list-cards');
  }
  navigateTo() {
    return cy.visit('/todos');
  }
  getTodoTitle() {
    return cy.get('.todo-list-title');
  }
}
