// https://docs.cypress.io/api/introduction/api.html

describe('Login Page : signed in', () => {
  it("login page loads",()=>{

    cy.visit('/sign-in');
    cy.get("#email").should("exist")

  })

  it("user can input into fields", ()=>{
    
    cy.get("#email").type("you33@firebase.com");
    cy.get("#password").type("1234");

  })

  it("form vaildation", ()=>{
    cy.get("#login-form > form > button").click();
    cy.get("p.red-text").should("exist");

  })

  it("user can login", ()=> {
    cy.get("#password").type("56");
    cy.get("#login-form > form > button").click();
    cy.contains("The latest cardiomyopathy experiments")
  })

})

describe("Signed in only pages", ()=> {
  it("My Posts page loads",()=>{
    cy.visit("/my-posts");
    cy.get("div.latest-news-container").should("exist");
  })

  it("query page loads",()=>{
    cy.visit("/query-data");
    cy.get("div#search-container").should("exist");

  })

  it("Add Data page loads",()=>{
    cy.visit("add-data");
    cy.contains("Add and record experimental data");
  })
  it("News data loads",()=>{
    cy.visit("/news-feed");
    cy.contains("Latest Cardiomyopathy News and Research");
  })

})

describe("Login page : signed out", ()=> {

  it("user can logout", ()=> {
    
    cy.get("#data-test-logout").click();
    cy.contains("Sign in below")
  })

  it("forgotten password link opens a modal", ()=> {
    cy.get("#password-container > a").click();
    cy.get("div.modal-mask").should("exist");

  })

  it("Submit reset request button triggers a request to firebase", ()=> {
    cy.get("#data-test-button").click();
    cy.get("p.red-text").should("exist");
  })

  it("user can close reset password model", ()=> {
    cy.get("div.modal-mask").should("exist");
    cy.get("div.modal-mask").click();
    cy.get("div.modal-mask").should("not.exist");
  })

})