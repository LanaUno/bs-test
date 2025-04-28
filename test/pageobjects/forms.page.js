import { faker } from "@faker-js/faker";

export const text = faker.company.buzzNoun();

class FormsPage {
    get textField() {
        return $(`~text-input`);
    }
    get textFieldResult() {
        return $(`~input-text-result`);
    }
    get switchText() {
        return $(`~switch-text`);
    }
    get switchButton() {
        return $(`~switch`);
    }

    async typeTextField() {
        await this.textField.setValue(text);
    }
    async clickSwitchButton() {
        await this.switchButton.click();
    }
}

export default new FormsPage();
