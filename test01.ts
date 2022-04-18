/// <reference types="Cypress" />
describe("should login using the custom commands", () => {
    it("login_No_successfully custom command", () => {
      cy.login("test.63021686@gmail.com", "tk..6302168");
      cy.login("test.6302168@gmail.com", "tk..63021686");
      cy.login("test117367@gmail.com", "tff.23547");
    });
    it("login_successfully custom commands", () => {
      cy.login_successfully("test.63021686@gmail.com", "tk..63021686")
    });
  });