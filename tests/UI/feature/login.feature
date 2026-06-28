@login
Feature: Verify login
  Verify user is able to login with valid credentials and invalid credentials

  Background:
    Given I navigate to the Url "https://boneplus.b1automation.com/"

  @valid
  Scenario: Verify user is able login with valid credentials
    And I enter the email "gangadhar@blazeautomation.com"
    And Click on submit button
    And I enter the password "BAblaze#4329"
    When Click on the Submit button
    Then That should redirect to the Dashboard "/dashboard/"

  @invalid
  Scenario Outline: Verify user gets an error message with invalid credentials
    And I enter the email "<email>"
    And Click on submit button
    And I enter the password "<password>"
    When Click on the Submit button
    Then I should see an error message indicating "<errorMessage>"

    Examples:
      | email                         | password   | errorMessage                                                    |
      | gangadhar@blazeautomation.com | BAblaze#43 | Wrong password. Try again or click Forgot password to reset it. |
