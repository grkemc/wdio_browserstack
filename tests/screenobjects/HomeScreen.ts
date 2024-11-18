import AppScreen from "./AppScreen.js";
import Gestures from "../helpers/Gestures.js";
import {iosSelectors} from "../screenobjects/selectors/iosSelectors.js";
import {androidSelectors} from "../screenobjects/selectors/androidSelectors.js";
import CommonMethods from '../helpers/CommonMethods.js';


class HomeScreen extends AppScreen {
    SELECTORS: { [key: string]: string };

    constructor() {
        const isIOS = driver.isIOS;

        const screenSelector = isIOS ? iosSelectors.HomeScreen.SCREEN : androidSelectors.HomeScreen.SCREEN;
        super(screenSelector);

        this.SELECTORS = {
            SCREEN: isIOS ? iosSelectors.HomeScreen.SCREEN : androidSelectors.HomeScreen.SCREEN,
            ICON_PROFILE: isIOS ? iosSelectors.HomeScreen.ICON_PROFILE : androidSelectors.HomeScreen.ICON_PROFILE,
            HOME_BTN: isIOS ? iosSelectors.HomeScreen.HOME_BTN : androidSelectors.HomeScreen.HOME_BTN,
            SCAN_BTN: isIOS ? iosSelectors.HomeScreen.SCAN_BTN : androidSelectors.HomeScreen.SCAN_BTN,
            SERVICE_BTN: isIOS ? iosSelectors.HomeScreen.SERVICE_BTN : androidSelectors.HomeScreen.SERVICE_BTN,
            ADVERTISING_CONFIRM_BTN: isIOS ? iosSelectors.HomeScreen.ADVERTISING_CONFIRM_BTN : androidSelectors.HomeScreen.ADVERTISING_CONFIRM_BTN,
            ADVERTISING_DECLINE_BTN: isIOS ? iosSelectors.HomeScreen.ADVERTISING_DECLINE_BTN : androidSelectors.HomeScreen.ADVERTISING_DECLINE_BTN,
        };
    }

    async declineAdvertising(timeout: number = 12000): Promise<any> {
        try {
            const isButtonDisplayed = await driver.waitUntil(
                async () => {
                    return await $(this.SELECTORS.ADVERTISING_DECLINE_BTN).isDisplayed();
                },
                {
                    timeout: timeout,
                    timeoutMsg: "Advertising Decline Button did not appear within the specified timeout",
                }
            );
            if (isButtonDisplayed) {
                await CommonMethods.click(this.SELECTORS.ADVERTISING_DECLINE_BTN);
            }
        } catch (error) {
            console.log("Advertising Decline Button is not displayed, skipping the click.");
        }
    }
    

} 

export default new HomeScreen();
