Feature: This feature will validate the prices of the product

  Background: Open the Swag Labs application
    Given User is on SauceDemo login page
    When User enters Valid Username "standard_user"
    And User enterd Valid Password "secret_sauce"
    And User clicks on Login button
    Then User lands on the Product Page

  @Sanity
  Scenario: To validate the Product Prices
    When User is on Products Page "PRODUCTS"
    Then User compare the following products price
      | Sauce Labs Backpack   | $29.99 |
      | Sauce Labs Bike Light | $9.99  |
