import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../Pages/loginPage";

Given("I am on the login page", () => {
  cy.openSite()
  cy.openLoginMenu()
})

When("I login with username {string} and password {string}", (username, password) => {
  loginPage.login(username, password)
})

Then("I should see the home page", () => {
  cy.url().should('include', '/')
})

Then("I should see an error message", () => {
  loginPage.checkErrorLabel()
})
