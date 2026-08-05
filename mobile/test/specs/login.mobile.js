const env = require('../../config/env');
const LoginPage = require('../pages/LoginPage');

describe('Login Mobile - Lacrei Saúde', () => {

     describe('Login', () => {

        it('Deve realizar login com sucesso', async () => {

            await browser.url(env.BASE_URL);

            await LoginPage.login(
                'adrianosilva130@gmail.com',
                'Pirat@360'
            );

            await browser.pause(5000);

            const urlAtual = await browser.getUrl();

            console.log('URL após login:', urlAtual);

            expect(urlAtual).toContain(
                '/saude/paciente/profissionais/buscar/'
            );

        });

        it('Não deve permitir login com senha inválida', async () => {

            await browser.url(env.BASE_URL);

            await LoginPage.login(
                'adrianosilva130@gmail.com',
                '123'
            );

            await browser.pause(3000);

            await expect(browser).not.toHaveUrlContaining(
                '/saude/paciente/profissionais/buscar/'
            );

        });

    });

});