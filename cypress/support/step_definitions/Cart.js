import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from '../Pages/CartPage';
import HomePage from '../Pages/HomePage';

const cartPage = new CartPage();
const homePage = new HomePage();

Given('the user is logged in', () => {
    cy.openSite();
    cy.openLoginMenu();
    cy.login();
});

When('the user choose the category {string}', (category) => {
  cy.clickCategory(category);
});

When('choose a porduct {string}', (product) => {
  cy.chooseProduct(product);
})

When('choose quantity of {int}', (quantity) => {
  cartPage.chooseQuantity(quantity);
})

When('click \"ADD TO CART\"', () => {
  cartPage.addToCart();
})

Then('the cart should show number of items with correct calculations', () => {
  cartPage.verifyCartItemCount();
  cartPage.verifyCartCalculations();
});

When('the user has a product in the cart', () => {
  cartPage.verifyItemExist();
});

When('the user removes the product', () => {
  cartPage.removeProductFromCart();
});

Then('the cart should be empty', () => {
  cartPage.verifyCartIsEmpty();
});
