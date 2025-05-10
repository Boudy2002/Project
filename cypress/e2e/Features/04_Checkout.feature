Feature: Checkout Functionality

  Background:
    Given the user is logged in successfully
    And the user choose the category "Laptops" on home page
    And choose a porduct "HP Chromebook 14 G1(ES)" on product page
    And the user goes to the cart page
  
  Scenario: Successful checkout with valid SafePay payment details
    When the user clicks on the checkout button
    And the user enters "Valid" "SafePay" payment information
    And the user confirms the order using "SafePay"
    Then the order confirmation message should be displayed

  Scenario: Successful checkout with valid MasterCredit payment details
    And the user enters "Valid" "MasterCredit" payment information
    When the user clicks on the checkout button
    And the user confirms the order using "MasterCredit"
    Then the order confirmation message should be displayed
    
  Scenario: Unsuccessful checkout with Invalid SafePay payment details
    When the user clicks on the checkout button
    And the user enters "Invalid" "SafePay" payment information
    Then I should see a warning about "SafePay" payment

  Scenario: Unsuccessful checkout with Invalid MasterCredit payment details
    When the user clicks on the checkout button
    And the user enters "Invalid" "MasterCredit" payment information
    Then I should see a warning about "MasterCredit" payment