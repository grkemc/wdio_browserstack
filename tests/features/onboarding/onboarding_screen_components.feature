@regression @1073484 
Feature: Onboarding
  
  Scenario: User goes through the onboarding sequence for all steps
    Given the app is fully loaded
    When I navigate to the onboarding screen 1
    Then I should see the onboarding title as "Lass uns deinen Verbrauch im Blick behalten." for step 1
    And I should see the onboarding description as "Wir zeigen dir, ob du mehr oder weniger verbrauchst und was das für dich heißt." for step 1
    And I should see the button "Weiter" for step 1

    When I navigate to the onboarding screen 2
    Then I should see the onboarding title as "Wir helfen dir, Nachzahlungen zu vermeiden." for step 2
    And I should see the onboarding description as "Wir sagen dir rechtzeitig Bescheid, wenn du deinen Abschlag anpassen solltest." for step 2
    And I should see the button "Weiter" for step 2

    When I navigate to the onboarding screen 3
    Then I should see the onboarding title as "Bei uns hast du deine Verträge ganz einfach im Griff." for step 3
    And I should see the onboarding description as "Wenn es etwas zu erledigen gibt, kannst du das hier ganz unkompliziert tun." for step 3
    And I should see the button "Los geht's" for step 3