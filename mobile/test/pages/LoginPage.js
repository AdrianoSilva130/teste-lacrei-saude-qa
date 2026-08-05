class LoginPage {

    get email() {
        return $('#email');
    }

    get senha() {
        return $('#password');
    }

    get entrar() {
        return $('button[type="submit"]');
    }

    async login(email, senha) {
        await this.email.waitForDisplayed();
        await this.email.setValue(email);

        await this.senha.waitForDisplayed();
        await this.senha.setValue(senha);

        await this.entrar.waitForDisplayed();
        await this.entrar.click();
    }
}

module.exports = new LoginPage();