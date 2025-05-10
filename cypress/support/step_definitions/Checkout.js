import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from '../Pages/CheckoutPage';

const checkoutPage = new CheckoutPage();

Given('the user is logged in successfully', () => {
    cy.openSite();
    cy.openLoginMenu();
    cy.login();
});

Given('the user choose the category {string} on home page', (category) => {
    cy.clickCategory(category);
});

Given('choose a porduct {string} on product page', (product) => {
    cy.chooseProduct(product);
    cy.addToCart();
})

Given('the user goes to the cart page', () => {
    checkoutPage.openCart();
})

When('the user clicks on the checkout button', () => {
    checkoutPage.checkout();
})

When('the user enters {string} {string} payment information', (type, paymentMethod) => {
    checkoutPage.pay(type, paymentMethod);
})

When('the user confirms the order using {string}', (paymentMethod) => {
    checkoutPage.confirmOrder(paymentMethod);
})

Then('the order confirmation message should be displayed', () => {
    checkoutPage.checkConfirmation();
})

Then('I should see a warning about {string} payment', (paymentMethod) => {
    checkoutPage.checkErrors(paymentMethod);
})