import { Given, When, Then } from "@cucumber/cucumber";
import LoginScreen from "../screenobjects/LoginScreen.js";
import HomeScreen from "@tests/screenobjects/HomeScreen.js";
import RegisterScreen from "@tests/screenobjects/RegisterScreen.js";


Then(/^the "([^"]*)", "([^"]*)", and "([^"]*)" input fields should be displayed$/, async (emailInput: string, passwordInput: string, repeatPasswordInput: string) => {
    await RegisterScreen.areFieldsVisible()
})