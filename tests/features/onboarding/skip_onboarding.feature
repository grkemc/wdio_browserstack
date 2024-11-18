@regression @1073484 
Feature: Onboarding

  Scenario: User skips the onboarding sequence
    Given the app is fully loaded
    When the onboarding screen is skipped
    When the app consent screen should be displayed for the current operating system

    