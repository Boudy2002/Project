import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../Pages/SignUpPage";

Given("I open the website", () => {
    cy.openSite()
  })
  
  When("I open the user menu", () => {
    cy.openLoginMenu()
  })

  When("I click on \"CREATE NEW ACCOUNT\"", () => {
    cy.openRegisterPage()
  })
  
  When("I fill the registration form with valid {string}", (userData) => {
    cy.fixture(userData).then((user) => {
        SignUpPage.signUp(user.validUser)
    })
  })

  When("I fill the registration form with invalid {string}", (userData) => {
    cy.fixture(userData).then((user) => {
        SignUpPage.signUp(user.invalidUser)
    })
  })
  
  When("I fill the registration form with existing {string}", (userData) => {
    cy.fixture(userData).then((user) => {
        SignUpPage.signUp(user.existingUser)
    })
  })

  When("I submit the registration form", () => {
    SignUpPage.clickRegister()
  })
  
  Then("I should be logged in with my new account", () => {
    SignUpPage.verifyUsername()
  })
  
  Then("I should see error messages", () => {
    SignUpPage.checkErrors()
  })

  Then("I should see a warning", () => {
    SignUpPage.checkExistance()
  })