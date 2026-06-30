# @login
# Feature: Verify login
#   Verify user is able to login with valid credentials and invalid credentials

#   Background:
#     Given I navigate to the Url "https://dev-dashboard-boneplus.b1automation.com"

#   @valid
#   Scenario: Verify user is able login with valid credentials
#     And I enter the email "gangadhar@blazeautomation.com"
#     And Click on submit button
#     And I enter the password "Blaze#43215"
#     When Click on the Submit button
#     Then That should redirect to the Dashboard "/dashboard/"

#   @invalid
#   Scenario Outline: Verify user gets an error message with invalid credentials
#     And I enter the email "<email>"
#     And Click on submit button
#     And I enter the password "<password>"
#     When Click on the Submit button
#     Then I should see an error message indicating "<errorMessage>"

#     Examples:
#       | email                         | password   | errorMessage                                                    |
#       | gangadhar@blazeautomation.com | BAblaze#43 | Wrong password. Try again or click Forgot password to reset it. |

Feature: User Authentication

  Background:
    Given I navigate to the Url "https://dev-dashboard-boneplus.b1automation.com"

  @smoke
  Scenario: Successful Login with Valid Credentials
    # Given I navigate to the Url "https://dev-dashboard-boneplus.b1automation.com"
    And I enter the email "gangadhar@blazeautomation.com"
    And Click on submit button
    And I enter the password "Blaze#43215"
    When Click on the Submit button
    Then That should redirect to the Dashboard "/dashboard/"

  Scenario Outline: Verify frontend validation for invalid email formats
    # Given I navigate to the Url "https://dev-dashboard-boneplus.b1automation.com"
    And I enter the email "<invalid_email>"
    When Click on submit button
    Then I should see an error message indicating "Please enter a valid E-mail address"

    Examples:
      | invalid_email           |
      | usergmail.com           |
      | test.email.com          |
      | @gmail.com              |
      | @domain.org             |
      | user@                   |
      | test@                   |
      | user@gmail              |
      | test@yahoo              |
      | user@@gmail.com         |
      | test@domain@company.com |
      | user name@gmail.com     |
      | test@ gmail.com         |
      | user#gmail.com          |
      | name$domain.com         |
      | .user@gmail.com         |
      | user.@gmail.com         |
      | user..name@gmail.com    |
      | user@gmail..com         |
      | @@@@@                   |
      | .....                   |
      | 678909890               |

  Scenario: Login with Incorrect Password
    # Given I navigate to the Url "https://dev-dashboard-boneplus.b1automation.com"
    And I enter the email "gangadhar@blazeautomation.com"
    And Click on submit button
    And I enter the password "123fthu"
    When Click on the Submit button
    Then I should see an error message indicating "Wrong password. Try again or click Forgot password to reset it."
