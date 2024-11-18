import { Given, When, Then } from "@cucumber/cucumber";
import StartScreen from "@tests/screenobjects/StartScreen.js";
import allure from '@wdio/allure-reporter';
import CommonMethods from "@tests/helpers/CommonMethods.js";


Given(/^the app is fully loaded$/, async () => {
    await browser.waitUntil(
        async () => (await StartScreen.isAppLoaded()) === true,
        {
            timeout: 15000, 
            timeoutMsg: 'App did not load in time'
        }
    );
});

Given(/^the app is launched$/, async () => {
    console.log('Given the app is launched');
}); 

Given(/^the user does not have a myEnergyKey registration$/, async () => {
    console.log('user does not have a myEnergyKey account');
  })

  When(/^I navigate to the onboarding screen (\d+)$/, async (step: number) => {
    console.log(`Navigating to onboarding screen step ${step}`);
    if (step !== 1) {
        await StartScreen.navigateToScreen(step);
    }
});

Then(/^I should see the onboarding title as "([^"]*)" for step (\d+)$/, async (expectedTitle: string, step: number) => {
    console.log(`Verifying title for step ${step}`);
    const actualTitle = await StartScreen.getOnboardingTitle(step);
    expect(actualTitle).toEqual(expectedTitle);
});

Then(/^I should see the onboarding description as "([^"]*)" for step (\d+)$/, async (expectedDescription: string, step: number) => {
    console.log(`Verifying description for step ${step}`);
    const actualDescription = await StartScreen.getOnboardingDescription(step);
    expect(actualDescription).toEqual(expectedDescription);
});

Then(/^I should see the button "([^"]*)" for step (\d+)$/, async (expectedButtonText: string, step: number) => {
    console.log(`Verifying button text for step ${step}`);
    const actualButtonText = await StartScreen.getOnboardingButtonText(step);
    expect(actualButtonText).toEqual(expectedButtonText);
});

When(/^the onboarding screen is skipped$/, async () => {
    await StartScreen.skipOnboarding();
});

When(/^I deny the app tracking dialog$/, async () => {
    await StartScreen.denyTrackingDialog();
});

When(/^I navigate to the Login Screen$/, async () => {
    await StartScreen.navigateLogin();
});

When(/^I allow the ENBW Sign-in Dialog$/, async () => {
    await StartScreen.allowENBWSignIn();
}); 

When(/^the app consent screen should be displayed for the current operating system$/, async () => {
    const appConsentDisplayed = await StartScreen.appConsentScreenDisplayed();
    expect(appConsentDisplayed).toBe(true);
});

When(/^the user taps on Neu registrieren CTA$/, async () => {
    await StartScreen.navigateRegister();
});


