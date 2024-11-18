@regression @1076550 
Feature:Login with valid credentials

    Background: Initialize the application
        Given the app is fully loaded
        And the onboarding screen is skipped
        And I deny the app tracking dialog

    Scenario Outline: Login with valid credentials
        Given I navigate to the Login Screen
        And I allow the ENBW Sign-in Dialog
        And the Login Screen should be displayed
        And the "EMAIL_FIELD" field should be visible
        And the "PASSWORD_FIELD" field should be visible
        And the "LOGIN_BTN" field should be visible
        When I enter "<email>" into the "EMAIL_FIELD" field
        And I enter "<password>" into the "PASSWORD_FIELD" field
        And I click the "LOGIN_BTN" button
        And I grant permission to the push notification
        And I decline advertising consents if available
        Then the Yello Dashboard should be displayed

        Examples:
        | email                | password       |
        | y-active03@byom.de   | apptest1234!   |