// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://dashboard.cypress.io/login/email")
    cy.get("#email").click().type(username);
    cy.get("#password").click().type(password);
    cy.get('button').contains('Log In').click();
    cy.contains("Incorrect email address or password");
  })

  Cypress.Commands.add('typeLogin', (user) => {
    cy.visit("https://dashboard.cypress.io/login/email");
    cy.get('input[name=email]').type(user.email)
    cy.get('input[name=password]').type(user.password)
  })