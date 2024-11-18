import AppScreen from "./AppScreen.js";
import Gestures from "../helpers/Gestures.js";
import {iosSelectors} from "../screenobjects/selectors/iosSelectors.js";
import {androidSelectors} from "../screenobjects/selectors/androidSelectors.js";
import CommonMethods from "@tests/helpers/CommonMethods.js";


class StartScreen extends AppScreen {
    SELECTORS: { [key: string]: string };

    constructor() {
        const isIOS = driver.isIOS;

        const screenSelector = isIOS ? iosSelectors.StartScreen.SCREEN : androidSelectors.StartScreen.SCREEN;
        super(screenSelector);

        this.SELECTORS = {
            ONBOARDING_NEXT_BTN: isIOS ? iosSelectors.StartScreen.ONBOARDING_NEXT_BTN : androidSelectors.StartScreen.ONBOARDING_NEXT_BTN,
            ONBOARDING_LOS_GEHTS_BTN: isIOS ? iosSelectors.StartScreen.ONBOARDING_LOS_GEHTS_BTN : androidSelectors.StartScreen.ONBOARDING_LOS_GEHTS_BTN,
            ONBOARDING_DENY_TRACKING_BTN: isIOS ? iosSelectors.StartScreen.ONBOARDING_DENY_TRACKING_BTN : androidSelectors.StartScreen.ONBOARDING_DENY_TRACKING_BTN,
            ONBOARDING_EINLOGGEN_BTN: isIOS ? iosSelectors.StartScreen.ONBOARDING_EINLOGGEN_BTN : androidSelectors.StartScreen.ONBOARDING_EINLOGGEN_BTN,
            ONBOARDING_DIALOG_CONTINUE_BTN: isIOS ? iosSelectors.StartScreen.ONBOARDING_DIALOG_CONTINUE_BTN : androidSelectors.StartScreen.ONBOARDING_DIALOG_CONTINUE_BTN,
            ONBOARDING_FIRST_SCREEN_TITLE: isIOS ? iosSelectors.StartScreen.ONBOARDING_FIRST_SCREEN_TITLE : androidSelectors.StartScreen.ONBOARDING_FIRST_SCREEN_TITLE,
            ONBOARDING_FIRST_SCREEN_DESCRIPTION: isIOS ? iosSelectors.StartScreen.ONBOARDING_FIRST_SCREEN_DESCRIPTION : androidSelectors.StartScreen.ONBOARDING_FIRST_SCREEN_DESCRIPTION,
            ONBOARDING_SECOND_SCREEN_TITLE: isIOS ? iosSelectors.StartScreen.ONBOARDING_SECOND_SCREEN_TITLE : androidSelectors.StartScreen.ONBOARDING_SECOND_SCREEN_TITLE,
            ONBOARDING_SECOND_SCREEN_DESCRIPTION: isIOS ? iosSelectors.StartScreen.ONBOARDING_SECOND_SCREEN_DESCRIPTION : androidSelectors.StartScreen.ONBOARDING_SECOND_SCREEN_DESCRIPTION,
            ONBOARDING_THIRD_SCREEN_TITLE: isIOS ? iosSelectors.StartScreen.ONBOARDING_THIRD_SCREEN_TITLE : androidSelectors.StartScreen.ONBOARDING_THIRD_SCREEN_TITLE,
            ONBOARDING_THIRD_SCREEN_DESCRIPTION: isIOS ? iosSelectors.StartScreen.ONBOARDING_THIRD_SCREEN_DESCRIPTION : androidSelectors.StartScreen.ONBOARDING_THIRD_SCREEN_DESCRIPTION,
            TITLE_BAR: androidSelectors.LoginScreen.TITLE_BAR,
            BROWSER_CUSTOMIZE_BTN: androidSelectors.StartScreen.BROWSER_CUSTOMIZE_BTN,
            BROWSER_REFRESH_BTN: androidSelectors.StartScreen.BROWSER_REFRESH_BTN,
            REGISTER_BUTTON: isIOS ? iosSelectors.RegisterScreen.REGISTER_BUTTON : androidSelectors.RegisterScreen.REGISTER_BUTTON,
        };
    }
    
    async isAppLoaded(): Promise<boolean> {
        try {
            CommonMethods.waitForVisible(this.SELECTORS.ONBOARDING_NEXT_BTN, 1000)
            return true;
        } catch (error) {
            console.log('App not loaded yet:', error);
            return false;
        }
    }

    async navigateToScreen(step: number) {
        if (step === 2) {
            await CommonMethods.click(this.SELECTORS.ONBOARDING_NEXT_BTN)
        } else if (step === 3) {
            await CommonMethods.click(this.SELECTORS.ONBOARDING_NEXT_BTN)
        }
    }

    async getOnboardingTitle(step: number): Promise<string> {
        let titleLocator: string;
        switch (step) {
            case 1:
                titleLocator = this.SELECTORS.ONBOARDING_FIRST_SCREEN_TITLE;
                break;
            case 2:
                titleLocator = this.SELECTORS.ONBOARDING_SECOND_SCREEN_TITLE;
                break;
            case 3:
                titleLocator = this.SELECTORS.ONBOARDING_THIRD_SCREEN_TITLE;
                break;
            default:
                throw new Error(`No title found for step ${step}`);
        }
        await CommonMethods.waitForVisible(titleLocator);
        return await CommonMethods.getText(titleLocator);
    }

    async getOnboardingButtonText(step: number): Promise<string> {
        let buttonLocator: string;
        switch (step) {
            case 1:
                buttonLocator = this.SELECTORS.ONBOARDING_NEXT_BTN; 
                break;
            case 2:
                buttonLocator = this.SELECTORS.ONBOARDING_NEXT_BTN; 
                break;
            case 3:
                buttonLocator = this.SELECTORS.ONBOARDING_LOS_GEHTS_BTN; 
                break;
            default:
                throw new Error(`No button found for step ${step}`);
        }
        await CommonMethods.waitForVisible(buttonLocator);
        return await CommonMethods.getText(buttonLocator);
    }

    async getOnboardingDescription(step: number): Promise<string> {
        let descriptionLocator: string;
        switch (step) {
            case 1:
                descriptionLocator = this.SELECTORS.ONBOARDING_FIRST_SCREEN_DESCRIPTION;
                break;
            case 2:
                descriptionLocator = this.SELECTORS.ONBOARDING_SECOND_SCREEN_DESCRIPTION;
                break;
            case 3:
                descriptionLocator = this.SELECTORS.ONBOARDING_THIRD_SCREEN_DESCRIPTION;
                break;
            default:
                throw new Error(`No description found for step ${step}`);
        }
        await CommonMethods.waitForVisible(descriptionLocator);
        return await CommonMethods.getText(descriptionLocator);
    }

    async skipOnboarding(){
        await CommonMethods.click(this.SELECTORS.ONBOARDING_NEXT_BTN);
        await CommonMethods.click(this.SELECTORS.ONBOARDING_NEXT_BTN);
        await CommonMethods.click(this.SELECTORS.ONBOARDING_LOS_GEHTS_BTN);
    }

    async denyTrackingDialog(){
        await $(this.SELECTORS.ONBOARDING_DENY_TRACKING_BTN).click();
    }

    async navigateLogin(){
        await CommonMethods.clickAndWait(this.SELECTORS.ONBOARDING_EINLOGGEN_BTN, 2)
    }

    async allowENBWSignIn(){
        if (CommonMethods.getPlatform() == 'ios') {
            CommonMethods.click(this.SELECTORS.ONBOARDING_DIALOG_CONTINUE_BTN)
        }
    }

    async appConsentScreenDisplayed(): Promise<boolean> {
        if (CommonMethods.getPlatform() === 'ios') {
            try {
                await CommonMethods.waitForVisible(this.SELECTORS.ONBOARDING_DENY_TRACKING_BTN);
                const isVisible = await CommonMethods.isVisible(this.SELECTORS.ONBOARDING_DENY_TRACKING_BTN);
                return isVisible; 
            } catch (error) {
                console.log('Consent screen not visible:', error);
                return false; 
            }
        }
        return false;
    }

    async navigateRegister(){
        await CommonMethods.clickAndWait(this.SELECTORS.REGISTER_BUTTON, 2)
    }

}
export default new StartScreen();
