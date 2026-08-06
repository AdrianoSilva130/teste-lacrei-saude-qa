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

    }
}


module.exports = new LoginPage();