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
Cypress.Commands.add("openSite", () => {
    cy.visit('https://advantageonlineshopping.com/#/', {
        timeout: 60000
    })
})

Cypress.Commands.add("openLoginMenu", () => {
    cy.get("#menuUserLink").click();
})

Cypress.Commands.add("openRegisterPage", () => {
    cy.contains('CREATE NEW ACCOUNT').click()
    cy.url().should('include', '/register');
})

Cypress.Commands.add("login", (username, password) => {
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.get("#sign_in_btn").click()
})
  
Cypress.Commands.add("addProductToCart", (productName) => {
    cy.contains(productName).click()
    cy.get(".add-to-cart").click()
})
Cypress.Commands.add('generateRandomUsername', () => {
    const randomName = require('random-name');
    let username = randomName.first();
    return username;
  });
  
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