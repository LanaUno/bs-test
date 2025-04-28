import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password({
    length: 8,
    pattern: /[0-9A-z_@]/,
});
const invalidPassword = faker.internet.password({
    length: 4,
    pattern: /[0-9]/,
});
const invalidEmail = faker.company.buzzNoun();

class LoginPage {
    get signUpLink() {
        return $(`//android.widget.TextView[@text="Sign up"]`);
    }
    get emailField() {
        return $(`~input-email`);
    }
    get passwordField() {
        return $(`~input-password`);
    }
    get passwordRepeat() {
        return $(`~input-repeat-password`);
    }
    get signUpButton() {
        return $(`android.view.ViewGroup`);
    }
    get alertWidget() {
        return $(`android.widget.FrameLayout`);
    }
    get loginButton() {
        return $(
            `//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup`
        );
    }
    get emailErrorMsg() {
        return $(
            `//android.widget.TextView[@text="Please enter a valid email address"]`
        );
    }
    get passwordErrorMsg() {
        return $(
            `//android.widget.TextView[@text="Please enter at least 8 characters"]`
        );
    }

    async clickSignUpLink() {
        await this.signUpLink.click();
    }
    async typeEmailField() {
        await this.emailField.setValue(email);
    }
    async typeInvalidEmail() {
        await this.emailField.setValue(invalidEmail);
    }
    async typePasswordField() {
        await this.passwordField.setValue(password);
    }
    async typeInvalidPassword() {
        await this.passwordField.setValue(invalidPassword);
    }
    async typePasswordRepeat() {
        await this.passwordRepeat.setValue(password);
    }
    async clickSignUpButton() {
        await this.signUpButton.click();
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }
}

export default new LoginPage();
