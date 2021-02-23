// https://docs.cypress.io/api/introduction/api.html

describe('Home Page : signed out', () => {
  it('static content loads', () => {
    cy.visit('/')
    cy.contains('p', "What's new")
    cy.contains('p', "The latest cardiomyopathy news")
  })

  it('dynamic content loads', () => {
    cy.contains('p', "What's new");
    cy.get('div#post').should('not.exist');

  })

  it('sign up button changes route',() =>{
    cy.get("#navbarTogglerDemo03 > div > a:nth-child(1)").click();
    cy.url().should('equal','http://localhost:8081/sign-up');

  })

  it('sign in button changes route',() =>{
    cy.get("#navbarTogglerDemo03 > div > a:nth-child(2)").click();
    cy.url().should('equal','http://localhost:8081/sign-in');
  })

  it('help and about link changes route',() =>{
    cy.get("#navbarTogglerDemo03 > ul > li > a").click();
    cy.url().should('equal','http://localhost:8081/about');
  })


})