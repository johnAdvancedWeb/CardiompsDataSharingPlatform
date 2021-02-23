// https://docs.cypress.io/api/introduction/api.html

describe('sign up Page', () => {
  it("register page loads",()=>{

    cy.visit('/sign-up');
    cy.get("#register-form").should("exist")

  })

  it("user can input into fields", ()=>{
    
    cy.get("#email").type("you33@firebase.com");
    cy.get("#password").type("123456");
    cy.get("#full-name").type("bobby");
    cy.get("#institution").type("high school")
    cy.get("#confirm-password").type("123456");

  })

  it("form vaildation", ()=> {
    cy.get("#confirm-password").type("12345");
    cy.get("p.red-text").should("exist");
  })

})