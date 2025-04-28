import mainPage from "../pageobjects/main.page";
import formsPage from "../pageobjects/forms.page";

describe("Wdio demo mobile app testing", () => {
    it("Switch button works correctly", async () => {
        await mainPage.clickFormsIcon();
        await expect(formsPage.switchText).toHaveText(
            "Click to turn the switch ON"
        );
        await formsPage.clickSwitchButton();
        await expect(formsPage.switchText).toHaveText(
            "Click to turn the switch OFF"
        );
    });
});
