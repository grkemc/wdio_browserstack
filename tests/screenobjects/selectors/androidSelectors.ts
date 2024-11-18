export class androidSelectors {

    static readonly StartScreen = {
        SCREEN: "~Start-screen",
        ONBOARDING_NEXT_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.TextView",
        ONBOARDING_LOS_GEHTS_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.widget.TextView",
        ONBOARDING_DENY_TRACKING_BTN: "id=de.yellostrom.incontrol.staging:id/btn_accept_cookies",
        ONBOARDING_EINLOGGEN_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[4]/android.widget.Button",
        ONBOARDING_DIALOG_CONTINUE_BTN: "~Continue",
        ONBOARDING_FIRST_SCREEN_TITLE: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView[1]",
        ONBOARDING_FIRST_SCREEN_DESCRIPTION: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView[2]",
        ONBOARDING_SECOND_SCREEN_TITLE: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView[1]",
        ONBOARDING_SECOND_SCREEN_DESCRIPTION: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView[2]",
        ONBOARDING_THIRD_SCREEN_TITLE: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView[1]",
        ONBOARDING_THIRD_SCREEN_DESCRIPTION: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView[2]",
        BROWSER_CUSTOMIZE_BTN: "id=com.android.chrome:id/menu_button_wrapper",
        BROWSER_REFRESH_BTN: "~Refresh",
    
    };
    static readonly LoginScreen = {
        SCREEN: "~Login-screen",
        TITLE_BAR: "id=com.android.chrome:id/title_bar",
        LOGIN_BUTTON: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.widget.Button",
        EMAIL_FIELD: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.widget.EditText",
        PASSWORD_FIELD: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.widget.EditText",
        NOTIFICATION_TITLE: '',
        NOTIFICATION_DESCRIPTION: "",
        NOTIFICATION_NEXT_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.Button",
        NOTIFICATION_ALLOW_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]",
        NOTIFICATION_DONT_ALLOW_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[2]",
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
        ICON_PROFILE: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.ScrollView/android.view.View[1]",
        HOME_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]",
        SCAN_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]",
        SERVICE_BTN: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]",
        ADVERTISING_CONFIRM_BTN: "",
        ADVERTISING_DECLINE_BTN: ""
    };

}