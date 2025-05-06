Feature: Shopping Cart Functionality

  Scenario: User adds a product to the cart
    Given the user visits the home page
    When the user choose the category "Laptops"
    And choose a porduct "HP Chromebook 14 G1(ES)"
    And choose quantity of 1
    And click "ADD TO CART"
    Then the cart should show number of items with correct calculations
  
  Scenario: User removes a product from the cart
    Given the user visits the home page
    When the user has a product in the cart
    And the user removes the product
    Then the cart should be empty

  Scenario: User adds several products from the cart
    Given the user visits the home page
    When the user choose the category "Laptops"
    And choose a porduct "HP Chromebook 14 G1(ES)"
    And choose quantity of 10
    And click "ADD TO CART"
    Then the cart should show number of items with correct calculations