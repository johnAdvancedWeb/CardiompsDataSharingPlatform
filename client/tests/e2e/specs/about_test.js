// https://docs.cypress.io/api/introduction/api.html

describe('About Page', () => {
  it('static content loads', () => {
    cy.visit('/about')
    cy.contains("Content is loading...");
  })

  it('dynamic content loads', () => {
    cy.get("#content").should("exist");
  })


})