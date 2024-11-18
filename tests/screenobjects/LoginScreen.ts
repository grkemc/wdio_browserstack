import AppScreen from "./AppScreen.js";
import Gestures from "../helpers/Gestures.js";
import {iosSelectors} from "../screenobjects/selectors/iosSelectors.js";
import {androidSelectors} from "../screenobjects/selectors/androidSelectors.js";
import CommonMethods from '../helpers/CommonMethods.js';


class LoginScreen extends AppScreen {
    SELECTORS: { [key: string]: string };

    constructor() {
        const isIOS = driver.isIOS;

        const screenSelector = isIOS ? iosSelectors.LoginScreen.SCREEN : androidSelectors.LoginScreen.SCREEN;
        super(screenSelector);

        this.SELECTORS = {
            LOGIN_CONTAINER_BUTTON: isIOS ? iosSelectors.LoginScreen.LOGIN_BUTTON : androidSelectors.LoginScreen.LOGIN_BUTTON,
            EMAIL_FIELD: isIOS ? iosSelectors.LoginScreen.EMAIL_FIELD : androidSelectors.LoginScreen.EMAIL_FIELD,
            PASSWORD_FIELD: isIOS ? iosSelectors.LoginScreen.PASSWORD_FIELD : androidSelectors.LoginScreen.PASSWORD_FIELD,
            LOGIN_BTN: isIOS ? iosSelectors.LoginScreen.LOGIN_BUTTON : androidSelectors.LoginScreen.LOGIN_BUTTON,
            NOTIFICATION_TITLE: isIOS ? iosSelectors.LoginScreen.NOTIFICATION_TITLE : androidSelectors.LoginScreen.NOTIFICATION_TITLE,
            NOTIFICATION_DESCRIPTION: isIOS ? iosSelectors.LoginScreen.NOTIFICATION_DESCRIPTION : androidSelectors.LoginScreen.NOTIFICATION_DESCRIPTION,
            NOTIFICATION_NEXT_BTN: isIOS ? iosSelectors.LoginScreen.NOTIFICATION_NEXT_BTN : androidSelectors.LoginScreen.NOTIFICATION_NEXT_BTN,
            NOTIFICATION_ALLOW_BTN: isIOS ? iosSelectors.LoginScreen.NOTIFICATION_ALLOW_BTN : androidSelectors.LoginScreen.NOTIFICATION_ALLOW_BTN,
            NOTIFICATION_DONT_ALLOW_BTN: isIOS ? iosSelectors.LoginScreen.NOTIFICATION_DONT_ALLOW_BTN : androidSelectors.LoginScreen.NOTIFICATION_DONT_ALLOW_BTN,
            ICON_PROFILE: isIOS ? iosSelectors.HomeScreen.ICON_PROFILE : androidSelectors.HomeScreen.ICON_PROFILE,
            HOME_BTN: isIOS ? iosSelectors.HomeScreen.HOME_BTN : androidSelectors.HomeScreen.HOME_BTN,
            SCAN_BTN: isIOS ? iosSelectors.HomeScreen.SCAN_BTN : androidSelectors.HomeScreen.SCAN_BTN,
            SERVICE_BTN: isIOS ? iosSelectors.HomeScreen.SERVICE_BTN : androidSelectors.HomeScreen.SERVICE_BTN,
        };
    }
    
    
    async isLoginScreenDisplayed(timeout: number = 30000): Promise<boolean> {
        const emailFieldVisible = await driver.waitUntil(
            async () => await $(this.SELECTORS.EMAIL_FIELD).isDisplayed(),
            {
                timeout: timeout,
                timeoutMsg: "E-mail Field did not appear within the specified timeout",
            }
        );
    
        const passwordFieldVisible = await driver.waitUntil(
            async () => await $(this.SELECTORS.PASSWORD_FIELD).isDisplayed(),
            {
                timeout: timeout,
                timeoutMsg: "Password Field did not appear within the specified timeout",
            }
        );
    
        const loginBtnVisible = await driver.waitUntil(
            async () => await $(this.SELECTORS.LOGIN_BTN).isDisplayed(),
            {
                timeout: timeout,
                timeoutMsg: "Login Button did not appear within the specified timeout",
            }
        );
    
        return emailFieldVisible && passwordFieldVisible && loginBtnVisible;
    }

    async areLoginElementsDisplayed(): Promise<boolean> {
        const elements = [
            $(this.SELECTORS.EMAIL_FIELD),
            $(this.SELECTORS.PASSWORD_FIELD),
            $(this.SELECTORS.LOGIN_BTN)
        ];
        for (const element of elements) {
            const isVisible = await element.isDisplayed();
            if (!isVisible) {
                return false; 
            }
        }
        return true; 
    }

    async isElementVisible(elementName: string): Promise<boolean> {
        const locator = this.SELECTORS[elementName]; 
        return await CommonMethods.isVisible(locator); 
    }

    async setValue(fieldName: string, value: string): Promise<void> {
        const locator = this.SELECTORS[fieldName]; 
        await CommonMethods.setValue(locator, value); 
    }

    async clickButton(buttonName: string, ): Promise<void> {
        const locator = this.SELECTORS[buttonName]; 
        await CommonMethods.click(locator)
    }

    async allowNotifications(): Promise<void> {
        await CommonMethods.waitForVisible(this.SELECTORS.NOTIFICATION_NEXT_BTN);
        await CommonMethods.click(this.SELECTORS.NOTIFICATION_NEXT_BTN);
        await CommonMethods.waitForVisible(this.SELECTORS.NOTIFICATION_ALLOW_BTN);
        await CommonMethods.click(this.SELECTORS.NOTIFICATION_ALLOW_BTN);
    }

    async isDashboardDisplayed(): Promise<boolean> {
        const elements = [
            $(this.SELECTORS.ICON_PROFILE),
            $(this.SELECTORS.HOME_BTN),
            $(this.SELECTORS.SCAN_BTN),
            $(this.SELECTORS.SERVICE_BTN)
        ];
        for (const element of elements) {
            const isVisible = await element.isDisplayed();
            if (!isVisible) {
                return false; 
            }
        }
        return true; 
    }

} 

export default new LoginScreen();
