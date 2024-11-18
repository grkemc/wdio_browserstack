Feature: Register

    Scenario: Verify E-mail confirmation page
    Given the app is fully loaded
    And the user does not have a myEnergyKey registration
    And the onboarding screen is skipped
    And I deny the app tracking dialog
    When the user taps on Neu registrieren CTA
    And I allow the ENBW Sign-in Dialog
    Then the "E-mail", "Password", and "Password Wiederholen" input fields should be displayed
