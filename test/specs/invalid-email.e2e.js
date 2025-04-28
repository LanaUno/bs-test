import mainPage from "../pageobjects/main.page";
import loginPage from "../pageobjects/login.page";

describe("Wdio demo mobile app testing", () => {
    it("Invalid Email", async () => {
        await mainPage.clickLoginIcon();
        await loginPage.typeInvalidEmail();
        await loginPage.typePasswordField();
        await loginPage.clickLoginButton();
        await expect(loginPage.emailErrorMsg).toHaveText(
            `Please enter a valid email address`
        );
    });
});
