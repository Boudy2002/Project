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
    cy.fixture('SignInUser').then((user) => {
        cy.get('input[name="username"]', { timeout: 30000 }).type(user.username)
        cy.get('input[name="password"]', { timeout: 30000 }).type(user.password)
        cy.get("#sign_in_btn").click()
        cy.wait(1500);
    });
})

Cypress.Commands.add('generateRandomUsername', () => {
    const randomName = require('random-name');
    let username = randomName.first();
    return username;
});

Cypress.Commands.add('clearCartData', () => {
    cy.writeFile('cypress/fixtures/OrderData.json', {});
});

Cypress.Commands.add('chooseProduct', (product) => {
    cy.contains('a.productName', product, { timeout: 10000 }).scrollIntoView().should('be.visible').click({ force: true });
});

Cypress.Commands.add('clickCategory', (category) => {
    const categoryMap = {
        Laptops: "#laptopsTxt",
        Tablets: "#tabletsTxt",
        Speakers: "#speakersTxt",
        Mice: "#miceTxt",
        Headphones: "#headphonesTxt"
      };
  
      const selector = categoryMap[category];
      if (!selector) throw new Error(`Unknown category: ${category}`);
  
      cy.get(selector).should('be.visible').click({ force: true });
      cy.url().should("include", `/category/${category}`);
});

Cypress.Commands.add('addToCart', () => {
    cy.get('button[name="save_to_cart"]').should("be.visible").click();
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