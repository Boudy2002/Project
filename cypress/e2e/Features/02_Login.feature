Feature: Login to the website

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I login with username "aboushmeila2" and password "Boudy@1234"
    Then I should see the home page

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I login with username "invalid" and password "wrongpass"
    Then I should see an error message
