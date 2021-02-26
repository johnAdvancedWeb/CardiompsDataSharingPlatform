// https://docs.cypress.io/api/introduction/api.html

describe('About Page', () => {
  it('static content loads', () => {
    cy.visit('/about')
    cy.contains("To access the site, you must first register an account. this can be done by pressing the 'Sign up' button in the top right corner of the page.");
  })
})