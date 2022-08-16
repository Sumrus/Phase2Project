$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the Login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the positive login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters Valid Username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enterd Valid Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestSteps.user_is_on_SauceDemo_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters Valid Username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestSteps.user_enters_Valid_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enterd Valid Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.user_enterd_Valid_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.user_lands_on_the_Product_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestSteps.user_is_on_SauceDemo_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters Valid Username \"problem_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestSteps.user_enters_Valid_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enterd Valid Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.user_enterd_Valid_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.user_lands_on_the_Product_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Product.feature");
formatter.feature({
  "name": "This feature will validate the prices of the product",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open the Swag Labs application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on SauceDemo login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestSteps.user_is_on_SauceDemo_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Valid Username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestSteps.user_enters_Valid_Username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enterd Valid Password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.user_enterd_Valid_Password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on the Product Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.user_lands_on_the_Product_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Product Prices",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User is on Products Page \"PRODUCTS\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProductSteps.user_is_on_Products_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User compare the following products price",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ProductSteps.user_compare_the_following_products_price(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});