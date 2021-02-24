import {TodoListPage} from '../support/todo-list.po';

const page = new TodoListPage();

describe('Todo list', () => {

  beforeEach(() => {
    page.navigateTo();
  });

it('Should have the correct title ', () => {
  page.getTodoTitle().should('have.text', 'Todos');
});

it('Should display a significant number of Todos', () => {
  page.getTodoCards().should('have.length.at.least', 10);
});


});
