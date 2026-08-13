const env = require('../../config/env');

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

    get botaoAgendarAtendimento() {
        return $('#atendimentos');
    }

    get botaoAgendarAtendimentoContato() {
        return $('button[aria-label="Ir para informações de contato da pessoa profissional"]');
    }

    get telefone() {
        return $('#requesterPhoneNumber');
    }

    get enviarCodigo() {
        return $('button[aria-label="Enviar código para o número de celular inserido"]');
    }

    get mensagemTelefoneIncorreto() {
        return $('body*=Número de celular incorreto');
    }

    get esqueciMinhaSenha() {
        return $('[data-qa-id="redefinir-senha"]');
    }

    get emailRecuperacao() {
        return $('#email');
    }

    get enviarLink() {
        return $('button[type="submit"]');
    }

    get mensagemRecuperacao() {
        return $('h3*=Verifique seu e-mail para redefinir a senha');
    }

    async preencherCampoReact(selector, valor) {
        await browser.execute(
            (selector, valor) => {
                const campo = document.querySelector(selector);

                if (!campo) {
                    throw new Error(
                        `Elemento não encontrado: ${selector}`
                    );
                }

                const setter = Object.getOwnPropertyDescriptor(
                    HTMLInputElement.prototype,
                    'value'
                ).set;

                setter.call(campo, valor);

                campo.dispatchEvent(
                    new Event('input', {
                        bubbles: true
                    })
                );

                campo.dispatchEvent(
                    new Event('change', {
                        bubbles: true
                    })
                );
            },
            selector,
            valor
        );
    }

    async login(email, senha) {
        await this.email.waitForDisplayed({
            timeout: 20000
        });

        await this.preencherCampoReact(
            '#email',
            email
        );

        console.log(
            'Email preenchido:',
            await this.email.getValue()
        );

        await this.senha.waitForDisplayed({
            timeout: 20000
        });

        await this.preencherCampoReact(
            '#password',
            senha
        );

        console.log(
            'Senha preenchida:',
            await this.senha.getValue()
        );

        await browser.hideKeyboard()
            .catch(() => {});

        await this.entrar.waitForClickable({
            timeout: 10000
        });

        await this.entrar.click();

        console.log(
            'Clique no botão realizado'
        );

        console.log(
            'Login concluído:',
            await browser.getUrl()
        );
    }

    async agendarAtendimento() {
        await this.botaoAgendarAtendimento.waitForDisplayed({
            timeout: 30000
        });

        await this.botaoAgendarAtendimento.waitForClickable({
            timeout: 30000
        });

        await this.botaoAgendarAtendimento.click();

        console.log('Botão Agendar consulta clicado');

        await this.botaoAgendarAtendimentoContato.waitForExist({
            timeout: 30000
        });

        await this.botaoAgendarAtendimentoContato.scrollIntoView();

        await this.botaoAgendarAtendimentoContato.waitForDisplayed({
            timeout: 30000
        });

        await this.botaoAgendarAtendimentoContato.waitForClickable({
            timeout: 30000
        });

        await this.botaoAgendarAtendimentoContato.click();

        console.log('Botão Agendar atendimento clicado');

        await this.telefone.waitForExist({
            timeout: 30000
        });

        await this.telefone.scrollIntoView();

        await this.telefone.waitForDisplayed({
            timeout: 30000
        });

        await this.telefone.setValue('11999999999');

        console.log('Telefone preenchido');

        await this.enviarCodigo.waitForDisplayed({
            timeout: 10000
        });

        await this.enviarCodigo.waitForClickable({
            timeout: 10000
        });

        await this.enviarCodigo.click();

        console.log('Botão Enviar código clicado');

        await this.mensagemTelefoneIncorreto.waitForDisplayed({
            timeout: 30000
        });

        console.log(
            'Mensagem de erro exibida: Número de celular incorreto'
        );
    }

    async recuperarSenha() {
        const esqueciMinhaSenha = $(
            'a[data-qa-id="redefinir-senha"]'
        );

        await esqueciMinhaSenha.waitForDisplayed({
            timeout: 10000
        });

        await esqueciMinhaSenha.click();

        console.log('Clicou em Esqueci minha senha');

        await this.email.waitForDisplayed({
            timeout: 10000
        });

        await this.preencherCampoReact(
            '#email',
            env.RECOVERY_EMAIL
        );

        console.log('Email de recuperação preenchido');

        const enviarLink = $('button[type="submit"]');

        await enviarLink.waitForDisplayed({
            timeout: 10000
        });

        await enviarLink.waitForEnabled({
            timeout: 30000
        });

        await enviarLink.click();

        console.log('Clique em Enviar link realizado');

        const mensagem = $(
            '//*[contains(text(), "Verifique seu e-mail para redefinir a senha")]'
        );

        await mensagem.waitForDisplayed({
            timeout: 30000
        });

        await expect(mensagem).toHaveText(
            'Verifique seu e-mail para redefinir a senha'
        );

        console.log(
            'Mensagem validada: Verifique seu e-mail para redefinir a senha'
        );
    }

    async loginComErro(email, senha) {
        await this.email.waitForDisplayed({
            timeout: 20000
        });

        await this.preencherCampoReact(
            '#email',
            email
        );

        await this.senha.waitForDisplayed({
            timeout: 20000
        });

        await this.preencherCampoReact(
            '#password',
            senha
        );

        await browser.hideKeyboard()
            .catch(() => {});

        await this.entrar.waitForClickable({
            timeout: 10000
        });

        await this.entrar.click();
    }
}

module.exports = new LoginPage();