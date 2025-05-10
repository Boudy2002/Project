Feature: Contact us Functionality

  Background:
    Given the user is logged in

  Scenario: Successful contact message
    When the user wants to send a message
    And enters "Valid" information
    And clicks the send button
    Then the message is sent successfully

  Scenario: Unsuccessful contact message
    When the user wants to send a message
    And enters "Invalid" information
    Then an error appears