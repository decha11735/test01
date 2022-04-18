describe("React TodoMVC", () => {
  it("login successfully", () => {
    cy.visit("https://dashboard.cypress.io/login/email")
    cy.get("#email").click().type("test.63021686@gmail.com")
    cy.get("#password").click().type("tk..63021686")
    cy.get('button').contains('Log In').click() 
    cy.contains("Welcome to the Cypress Dashboard!")

  })
  it("enter wrong email", () => {
    cy.visit("https://dashboard.cypress.io/login/email")
    cy.get("#email").click().type("test.6302168@gmail.com")
    cy.get("#password").click().type("tk..63021686")
    cy.get('button').contains('Log In').click()
    cy.contains("Incorrect email address or password")
    
  })
  it("enter wrong password", () => {
    cy.visit("https://dashboard.cypress.io/login/email")
    cy.get("#email").click().type("test.63021686@gmail.com")
    cy.get("#password").click().type("tk..6302168")
    cy.get('button').contains('Log In').click() 
    cy.contains("Incorrect email address or password")
    
  })
  it("Enter an account that is not yet in the system.", () => {
    cy.visit("https://dashboard.cypress.io/login/email")
    cy.get("#email").click().type("test117367@gmail.com")
    cy.get("#password").click().type("tff.23547")
    cy.get('button').contains('Log In').click() 
    cy.contains("Incorrect email address or password")
  })

})
  