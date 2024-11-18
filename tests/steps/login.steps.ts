import { Given, When, Then } from "@cucumber/cucumber";
import LoginScreen from "../screenobjects/LoginScreen.js";
import HomeScreen from "@tests/screenobjects/HomeScreen.js";


Then(/^the Login Screen should be displayed$/, async () => {
    await expect(await LoginScreen.isLoginScreenDisplayed()).toBe(true);
   
});

Then(/^the "([^"]*)" field should be visible$/, async (elementName: string) => {
    const isVisible = await LoginScreen.isElementVisible(elementName);

    if (!isVisible) {
        throw new Error(`The ${elementName} field is not visible`);
    }
});

When(/^I enter "([^"]*)" into the "([^"]*)" field$/, async (value: string, fieldName: string) => {
    await LoginScreen.setValue(fieldName, value); 
});

When(/^I click the "([^"]*)" button$/, async (buttonName: string) => {
    await LoginScreen.clickButton(buttonName); 
});

When(/^I grant permission to the push notification$/, async () => {
    await LoginScreen.allowNotifications();
    
});

When(/^I decline advertising consents if available$/, async () => {
    await HomeScreen.declineAdvertising();
});

Then(/^the Yello Dashboard should be displayed$/, async () => {
    await expect(await LoginScreen.isDashboardDisplayed()).toBe(true); 
});
