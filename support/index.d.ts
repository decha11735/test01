declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<Element>;
    login_successfully(email: string, password: string): Chainable<Element>;
    typeLogin(user:[]): Chainable<Element>;
  }
}