import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../Pages/HomePage';

const homePage = new HomePage();

When('the user wants to send a message', () => {
    homePage.goToContact();
})

When('enters {string} information', (validity) => {
    homePage.fillContactForm(validity);
})

When('clicks the send button', () => {
    homePage.sendMessage();
})

Then('the message is sent successfully', () => {
    homePage.checkSuccess();
})

Then('an error appears', () => {
    homePage.checkError();
})