/// <reference types="Cypress" />



describe("React TodoMVC", () => {
  const Email_Id =[
    {Case:"login successfully",Email:"test.63021686@gmail.com",Id:"tk..63021686",Expected_Output: "Welcome to the Cypress Dashboard!"},
    {Case:"enter wrong email",Email:"test.6302168@gmail.com",Id:"tk..63021686",Expected_Output: "Incorrect email address or password"},
    {Case:"enter wrong password",Email:"test.63021686@gmail.com",Id:"tk..6302168" ,Expected_Output: "Incorrect email address or password"},
    {Case:"Enter an account that is not yet in the system.",Email:"test117367@gmail.com",Id:"tff.23547" ,Expected_Output: "Incorrect email address or password"}
  ]
  beforeEach(() => {
    cy.visit("https://dashboard.cypress.io/login/email")
})

  for (let i = 0; i < Email_Id.length; i++) {
    it(Email_Id[i].Case, () => {
      cy.get("#email").click().type(Email_Id[i].Email)
      cy.get("#password").click().type(Email_Id[i].Id)
      cy.get('button').contains('Log In').click() 
      cy.contains(Email_Id[i].Expected_Output)
  
    })
  
  }
})
