// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Static content loads', () => {
    cy.visit('/')
    cy.contains('p', "What's new")
    cy.contains('p', "The latest cardiomyopathy news")
  })

  it('Dynamic content loads', () => {
    cy.visit('/');
    cy.contains('p', "What's new");
    cy.get('div#post').should('not.exist');

  })
})