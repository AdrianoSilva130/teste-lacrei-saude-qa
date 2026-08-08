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

    // Elemento da página
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
            .catch(() => { });

        await this.entrar.waitForClickable({
            timeout: 10000
        });

        await this.entrar.click();

        console.log(
            'Clique no botão realizado'
        );
    }


    async agendarAtendimento() {

        // Primeiro clique: Agendar consulta
        await this.botaoAgendarAtendimento.waitForDisplayed({
            timeout: 10000
        });

        await this.botaoAgendarAtendimento.click();

        console.log('Botão Agendar consulta clicado');


        // Segundo clique: Agendar atendimento
        await this.botaoAgendarAtendimentoContato.waitForDisplayed({
            timeout: 10000
        });

        await this.botaoAgendarAtendimentoContato.click();

        console.log('Botão Agendar atendimento clicado');


        // Campo de telefone
        await this.telefone.waitForDisplayed({
            timeout: 10000
        });

        await this.telefone.setValue('11999999999');

        console.log('Telefone preenchido');


        // Enviar código
        await this.enviarCodigo.waitForClickable({
            timeout: 10000
        });

        await this.enviarCodigo.click();

        console.log('Botão Enviar código clicado');

        await this.mensagemTelefoneIncorreto.waitForDisplayed({
            timeout: 10000
        });

        console.log('Mensagem de erro exibida: Número de celular incorreto');

    }



    async recuperarSenha() {

        // Clica em "Esqueci minha senha"
        const esqueciMinhaSenha = $(
            'a[data-qa-id="redefinir-senha"]'
        );

        await esqueciMinhaSenha.waitForDisplayed({
            timeout: 10000
        });

        await esqueciMinhaSenha.click();

        console.log('Clicou em Esqueci minha senha');

        // Aguarda o campo da tela de recuperação
        await this.email.waitForDisplayed({
            timeout: 10000
        });

        await this.preencherCampoReact(
            '#email',
            'joadrito@gmail.com'
        );

        console.log('Email de recuperação preenchido');

        // Botão Enviar link
        const enviarLink = $('button[type="submit"]');

        await enviarLink.waitForClickable({
            timeout: 10000
        });

        // Primeiro clique
        await enviarLink.click();

        console.log('Primeiro clique em Enviar link');

        await browser.pause(1000);

        // Segundo clique somente se o botão continuar existindo
        const enviarLinkNovamente = $('button[type="submit"]');

        if (await enviarLinkNovamente.isExisting()) {

            await enviarLinkNovamente.waitForClickable({
                timeout: 10000
            });

            await enviarLinkNovamente.click();

            console.log('Segundo clique em Enviar link');
        }

        // Validação da tela final
        const mensagem = $(
            '//*[contains(text(), "Verifique seu e-mail para redefinir a senha")]'
        );

        await mensagem.waitForDisplayed({
            timeout: 10000
        });

        console.log(
            'Mensagem validada: Verifique seu e-mail para redefinir a senha'
        );
    }


}

module.exports = new LoginPage();

