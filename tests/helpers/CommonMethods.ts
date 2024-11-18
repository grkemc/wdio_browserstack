class CommonMethods {

    async isVisible(locator: string): Promise<boolean> {
        const element = $(locator);
        return await element.isDisplayed();
    }

    async isClickable(locator: string): Promise<boolean> {
        const element = $(locator);
        return await element.isClickable();
    }

    async click(locator: string): Promise<void> {
        const element = $(locator);
        await element.click();
    }

    async getText(locator: string): Promise<string> {
        const element = $(locator);
        return await element.getText();
    }

    async getAttribute(locator: string, attribute: string): Promise<string | null> {
        const element = $(locator);
        return await element.getAttribute(attribute);
    }

    async doesExist(locator: string): Promise<boolean> {
        const element = $(locator);
        return await element.isExisting();
    }

    async isEnabled(locator: string): Promise<boolean> {
        const element = $(locator);
        return await element.isEnabled();
    }

    async setValue(locator: string, value: string): Promise<void> {
        const element = $(locator);
        await element.setValue(value);
    }

    async clickAndWait(locator: string, timeout = 20000): Promise<void> {
        const element = $(locator);
        await element.click();
        await browser.pause(timeout); 
    }

    async waitForVisible(locator: string, timeout = 20000): Promise<void> {
        const element = $(locator);
        await element.waitForDisplayed({ timeout });
    }

    async waitForClickable(locator: string, timeout = 20000): Promise<void> {
        const element = $(locator);
        await element.waitForClickable({ timeout });
    }

    getPlatform(): string {
        const platformName = browser.capabilities.platformName?.toLowerCase();
        return platformName ? platformName : 'unknown';
    }
}

export default new CommonMethods();