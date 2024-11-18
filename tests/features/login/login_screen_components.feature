@regression @1076550
Feature: Login screen components

   
  Scenario: Successful display of the Login screen
    Given the app is fully loaded
    And the onboarding screen is skipped
    When I deny the app tracking dialog
    And I navigate to the Login Screen
    And I allow the ENBW Sign-in Dialog
    Then the Login Screen should be displayed
    And the "EMAIL_FIELD" field should be visible
    And the "PASSWORD_FIELD" field should be visible
    And the "LOGIN_BTN" field should be visible


  