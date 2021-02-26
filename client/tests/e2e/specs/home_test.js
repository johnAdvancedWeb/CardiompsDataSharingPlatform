// https://docs.cypress.io/api/introduction/api.html

describe('Home Page : signed out', () => {
  it('static content loads', () => {
    cy.visit('/')
    cy.contains("Please login or register to view this page")
  })

  it('sign up button changes route',() =>{
    cy.get("#navbarTogglerDemo03 > div > a:nth-child(1)").click();
    cy.url().should('equal','http://localhost:8080/sign-up');

  })

  it('sign in button changes route',() =>{
    cy.get("#navbarTogglerDemo03 > div > a:nth-child(2)").click();
    cy.url().should('equal','http://localhost:8080/sign-in');
  })

  it('help and about link changes route',() =>{
    cy.get("#navbarTogglerDemo03 > ul > li > a").click();
    cy.url().should('equal','http://localhost:8080/about');
  })


})