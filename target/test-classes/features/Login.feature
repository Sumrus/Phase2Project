Feature: This feature would be used to design the Login page of the application

  Background: Open the Swag Labs application
    Given User is on SauceDemo login page

  @Regression
  Scenario Outline: To validate the positive login
    When User enters Valid Username "<username>"
    And User enterd Valid Password "<password>"
    And User clicks on Login button
    Then User lands on the Product Page

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |

  Scenario Outline: To validate the negative login
    When User enters Invalid Username "<username>"
    And User enterd Invalid Password "<password>"
    And User clicks on Login button
    Then User gets the error message as "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | username     | password     |
      | Abc          | secret_sauce |
      | problem_user | @854Rusia    |
