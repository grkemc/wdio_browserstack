import { AfterStep, BeforeStep, ITestStepHookParameter, Status as CucumberStatus } from '@cucumber/cucumber';
import allure from '@wdio/allure-reporter';
import { Status } from "allure-js-commons";

BeforeStep(function (testStep: ITestStepHookParameter) {
    allure.startStep(testStep.pickleStep.text);
});

AfterStep(async function (testStep: ITestStepHookParameter) {
    const status = testStep.result?.status;

    if (status === CucumberStatus.FAILED) {
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment('Error Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
        allure.endStep(Status.FAILED);
    } else {
        allure.endStep(Status.PASSED);
    }
});