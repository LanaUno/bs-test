import loginPage from "../pageobjects/login.page";
import mainPage from "../pageobjects/main.page";

describe("Wdio demo mobile app testing", () => {
    it("Sign up", async () => {
        await mainPage.clickLoginIcon();
        await loginPage.clickSignUpLink();
        await loginPage.typeEmailField();
        await loginPage.typePasswordField();
        await loginPage.typePasswordRepeat();
        await loginPage.clickSignUpButton();
        await loginPage.alertWidget.isDisplayed();
        await expect(loginPage.alertWidget).toHaveAttr("enabled");
    });
});
