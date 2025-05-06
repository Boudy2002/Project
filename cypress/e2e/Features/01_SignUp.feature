Feature: User Sign Up

  As a new user
  I want to register a new account
  So that I can log in and use the site
  
  Scenario: Successful user registration
    Given I open the website
    When I open the user menu
    And I click on "CREATE NEW ACCOUNT"
    And I fill the registration form with valid "SignUpUser"
    And I submit the registration form
    Then I should be logged in with my new account
  
  Scenario: Unsuccessful user registration
    Given I open the website
    When I open the user menu
    And I click on "CREATE NEW ACCOUNT"
    And I fill the registration form with invalid "SignUpUser"
    Then I should see error messages

  Scenario: Existing user registration
    Given I open the website
    When I open the user menu
    And I click on "CREATE NEW ACCOUNT"
    And I fill the registration form with existing "SignUpUser"
    And I submit the registration form
    Then I should see a warning
