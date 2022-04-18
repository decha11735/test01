// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="Cypress" />
Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://dashboard.cypress.io/login/email")
    cy.get("#email").click().type(username);
    cy.get("#password").click().type(password);
    cy.get('button').contains('Log In').click();
    cy.contains("Incorrect email address or password");
  })
Cypress.Commands.add("login_successfully", (username, password) => {
    cy.visit("https://dashboard.cypress.io/login/email")
    cy.get("#email").click().type(username);
    cy.get("#password").click().type(password);
    cy.get('button').contains('Log In').click();
    cy.contains("Welcome to the Cypress Dashboard!");
  })
Cypress.Commands.add('typeLogin', (user) => {
    cy.visit("https://dashboard.cypress.io/login/email");
    cy.get('input[name=email]').type(user.email)
    cy.get('input[name=password]').type(user.password)
  })
// Alternatively you can use CommonJS syntax:
// require('./commands')
