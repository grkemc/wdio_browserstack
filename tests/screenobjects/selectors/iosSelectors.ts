export class iosSelectors {

    static readonly StartScreen = {
        SCREEN: "~Start-screen",
        ONBOARDING_NEXT_BTN: "~Weiter",
        ONBOARDING_LOS_GEHTS_BTN: "~Los geht's",
        ONBOARDING_DENY_TRACKING_BTN: "~Ask App Not to Track",
        ONBOARDING_EINLOGGEN_BTN: "~Einloggen",
        ONBOARDING_DIALOG_CONTINUE_BTN: "~Continue",
        PASSWORD_FIELD: "~ios-password-field",
        ONBOARDING_FIRST_SCREEN_TITLE: "~Lass uns deinen Verbrauch im Blick behalten.",
        ONBOARDING_FIRST_SCREEN_DESCRIPTION: "~Wir zeigen dir, ob du mehr oder weniger verbrauchst und was das für dich heißt.",
        ONBOARDING_SECOND_SCREEN_TITLE: "~Wir helfen dir, Nachzahlungen zu vermeiden.",
        ONBOARDING_SECOND_SCREEN_DESCRIPTION: "~Wir sagen dir rechtzeitig Bescheid, wenn du deinen Abschlag anpassen solltest.",
        ONBOARDING_THIRD_SCREEN_TITLE: "~Bei uns hast du deine Verträge ganz einfach im Griff.",
        ONBOARDING_THIRD_SCREEN_DESCRIPTION: "~Wenn es etwas zu erledigen gibt, kannst du das hier ganz unkompliziert tun."
    };
    static readonly LoginScreen = {
        SCREEN: "~Login-screen",
        LOGIN_BUTTON: "~Anmelden",
        EMAIL_FIELD: '//XCUIElementTypeOther[@name="E-Mail-Adresse"]',
        PASSWORD_FIELD: '//XCUIElementTypeOther[@name="Passwort"]',
        NOTIFICATION_TITLE: '~Bleib immer auf dem Laufenden.',
        NOTIFICATION_DESCRIPTION: "~Wir schicken dir eine Push-Nachricht, wenn's was Wichtiges gibt.",
        NOTIFICATION_NEXT_BTN: "~icon-incoming",
        NOTIFICATION_ALLOW_BTN: "~Allow",
        NOTIFICATION_DONT_ALLOW_BTN: "~Don’t Allow",
    };

    static readonly RegisterScreen = {
        SCREEN: "~Register-screen",
        REGISTER_BUTTON: "~Neu registrieren",
        REGISTER_TITLE_TEXT: '//XCUIElementTypeStaticText[@name="Ein Konto für alle Energiedienste."]',
        EMAIL_FIELD: '//XCUIElementTypeStaticText[@name="E-Mail-Adresse"]',
        PASSWORD_FIELD: '//XCUIElementTypeStaticText[@name="Passwort"]',
        PASSWORD_WIEDERHOLEN_FIELD: '//XCUIElementTypeStaticText[@name="Passwort wiederholen"]',
        AGREE_TERMS_AND_CONDITIONS: "~Ich bin mit den",
        PRIVACY_POLICY_LINK: '//XCUIElementTypeLink[@name="Datenschutzhinweise in einem neuen Fenster öffnen"]',
        MY_ENERGIE_KEY_ERSTELLEN_BTN: "~myEnergyKey erstellen",
        ALREADY_HAVE_ACCOUNT_LINKTEXT: "~Ich habe schon einen myEnergyKey",
        YELLO_WEBSITE_BTN: '//XCUIElementTypeOther[@name="article"]/XCUIElementTypeLink[1]',
        MEINE_ENBW_WEBSITE_BTN: '//XCUIElementTypeOther[@name="article"]/XCUIElementTypeLink[2]',
        MOBILITY_PLUS_WEBSITE_BTN: '//XCUIElementTypeOther[@name="article"]/XCUIElementTypeLink[3]',
        ZUHAUSE_PLUS_WEBSITE_BTN: '//XCUIElementTypeOther[@name="article"]/XCUIElementTypeLink[4]',
        IMPRESSUM_LINK_TEXT: '//XCUIElementTypeLink[@name="Impressum"]',
        DATENSCHUTZ_LINK_TEXT: '//XCUIElementTypeLink[@name="Datenschutz"]',
        UBER_DEN_MYENERGYKEY_LINK_TEXT: '//XCUIElementTypeLink[@name="Über den myEnergyKey"]',

    };

    static readonly HomeScreen = {
        SCREEN: "~Home-screen",
        ICON_PROFILE: "~icon-profile",
        HOME_BTN: '//XCUIElementTypeButton[@name="Home"]',
        SCAN_BTN: '//XCUIElementTypeButton[@name="icon_scan"]',
        SERVICE_BTN: '//XCUIElementTypeButton[@name="Service"]',
        ADVERTISING_CONFIRM_BTN: "~Werbezustimmung abgeben",
        ADVERTISING_DECLINE_BTN: "~Danke. Im Moment nicht"
    };

}