// https://docs.cypress.io/api/introduction/api.html

describe('News Page', () => {
  it('static content loads', () => {
    cy.visit('/news')
    cy.contains("Please login or register to view this page");
  })
})