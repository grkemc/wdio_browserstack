import AppScreen from "./AppScreen.js";
import Gestures from "../helpers/Gestures.js";
import {iosSelectors} from "../screenobjects/selectors/iosSelectors.js";
import {androidSelectors} from "../screenobjects/selectors/androidSelectors.js";
import CommonMethods from '../helpers/CommonMethods.js';


class RegisterScreen extends AppScreen {
    SELECTORS: { [key: string]: string };

    constructor() {
        const isIOS = driver.isIOS;

        const screenSelector = isIOS ? iosSelectors.RegisterScreen.SCREEN : androidSelectors.RegisterScreen.SCREEN;
        super(screenSelector);

        this.SELECTORS = {
            SCREEN: isIOS ? iosSelectors.RegisterScreen.SCREEN : androidSelectors.RegisterScreen.SCREEN,
            REGISTER_BUTTON: isIOS ? iosSelectors.RegisterScreen.REGISTER_BUTTON : androidSelectors.RegisterScreen.REGISTER_BUTTON,
            REGISTER_TITLE_TEXT: isIOS ? iosSelectors.RegisterScreen.REGISTER_TITLE_TEXT : androidSelectors.RegisterScreen.REGISTER_TITLE_TEXT,
            EMAIL_FIELD: isIOS ? iosSelectors.RegisterScreen.EMAIL_FIELD : androidSelectors.RegisterScreen.EMAIL_FIELD,
            PASSWORD_FIELD: isIOS ? iosSelectors.RegisterScreen.PASSWORD_FIELD : androidSelectors.RegisterScreen.PASSWORD_FIELD,
            PASSWORD_WIEDERHOLEN_FIELD: isIOS ? iosSelectors.RegisterScreen.PASSWORD_WIEDERHOLEN_FIELD : androidSelectors.RegisterScreen.PASSWORD_WIEDERHOLEN_FIELD,
            AGREE_TERMS_AND_CONDITIONS: isIOS ? iosSelectors.RegisterScreen.AGREE_TERMS_AND_CONDITIONS : androidSelectors.RegisterScreen.AGREE_TERMS_AND_CONDITIONS,
            PRIVACY_POLICY_LINK: isIOS ? iosSelectors.RegisterScreen.PRIVACY_POLICY_LINK : androidSelectors.RegisterScreen.PRIVACY_POLICY_LINK,
            MY_ENERGIE_KEY_ERSTELLEN_BTN: isIOS ? iosSelectors.RegisterScreen.MY_ENERGIE_KEY_ERSTELLEN_BTN : androidSelectors.RegisterScreen.MY_ENERGIE_KEY_ERSTELLEN_BTN,
            ALREADY_HAVE_ACCOUNT_LINKTEXT: isIOS ? iosSelectors.RegisterScreen.ALREADY_HAVE_ACCOUNT_LINKTEXT : androidSelectors.RegisterScreen.ALREADY_HAVE_ACCOUNT_LINKTEXT,
            YELLO_WEBSITE_BTN: isIOS ? iosSelectors.RegisterScreen.YELLO_WEBSITE_BTN : androidSelectors.RegisterScreen.YELLO_WEBSITE_BTN,
            MEINE_ENBW_WEBSITE_BTN: isIOS ? iosSelectors.RegisterScreen.MEINE_ENBW_WEBSITE_BTN : androidSelectors.RegisterScreen.MEINE_ENBW_WEBSITE_BTN,
            MOBILITY_PLUS_WEBSITE_BTN: isIOS ? iosSelectors.RegisterScreen.MOBILITY_PLUS_WEBSITE_BTN : androidSelectors.RegisterScreen.MOBILITY_PLUS_WEBSITE_BTN,
            ZUHAUSE_PLUS_WEBSITE_BTN: isIOS ? iosSelectors.RegisterScreen.ZUHAUSE_PLUS_WEBSITE_BTN : androidSelectors.RegisterScreen.ZUHAUSE_PLUS_WEBSITE_BTN,
            IMPRESSUM_LINK_TEXT: isIOS ? iosSelectors.RegisterScreen.IMPRESSUM_LINK_TEXT : androidSelectors.RegisterScreen.IMPRESSUM_LINK_TEXT,
            DATENSCHUTZ_LINK_TEXT:isIOS ? iosSelectors.RegisterScreen.DATENSCHUTZ_LINK_TEXT : androidSelectors.RegisterScreen.DATENSCHUTZ_LINK_TEXT,
            UBER_DEN_MYENERGYKEY_LINK_TEXT: isIOS ? iosSelectors.RegisterScreen.UBER_DEN_MYENERGYKEY_LINK_TEXT : androidSelectors.RegisterScreen.UBER_DEN_MYENERGYKEY_LINK_TEXT,          
            };
    }

    async areFieldsVisible(): Promise<boolean> {
        const isEmailFieldVisible = await CommonMethods.isVisible(this.SELECTORS.EMAIL_FIELD);
        const isPasswordFieldVisible = await CommonMethods.isVisible(this.SELECTORS.PASSWORD_FIELD);
        const isRepeatPasswordFieldVisible = await CommonMethods.isVisible(this.SELECTORS.PASSWORD_WIEDERHOLEN_FIELD);

        return isEmailFieldVisible && isPasswordFieldVisible && isRepeatPasswordFieldVisible;
    }
    

} 

export default new RegisterScreen();
