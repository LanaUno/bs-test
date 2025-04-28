class MainPage {
    get loginIcon() {
        return $(`~Login`);
    }
    get formsIcon() {
        return $(`~Forms`);
    }

    async clickLoginIcon() {
        await this.loginIcon.click();
    }
    async clickFormsIcon() {
        await this.formsIcon.click();
    }
}

export default new MainPage();
