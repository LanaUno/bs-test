import mainPage from "../pageobjects/main.page";
import formsPage from "../pageobjects/forms.page";
import { text } from "../pageobjects/forms.page";

describe("Wdio demo mobile app testing", () => {
    it("Should keep text", async () => {
        await mainPage.clickFormsIcon();
        await formsPage.typeTextField();
        await expect(formsPage.textField).toHaveText(text);
    });
});
