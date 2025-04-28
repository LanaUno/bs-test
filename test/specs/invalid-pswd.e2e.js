import mainPage from "../pageobjects/main.page";
import loginPage from "../pageobjects/login.page";

describe("Wdio demo mobile app testing", () => {
    it("Invalid password", async () => {
        await mainPage.clickLoginIcon();
        await loginPage.typeEmailField();
        await loginPage.typeInvalidPassword();
        await loginPage.clickLoginButton();
        await expect(loginPage.passwordErrorMsg).toHaveText(
            `Please enter at least 8 characters`
        );
    });
});
