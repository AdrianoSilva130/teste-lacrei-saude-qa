const env = require('../../config/env');
const LoginPage = require('../pages/LoginPage');


describe('Login Mobile - Lacrei Saúde', () => {


    it('Deve realizar login com sucesso', async () => {


        await browser.url(env.BASE_URL);


        await browser.pause(5000);


        await LoginPage.login(
            'joadrito@gmail.com',
            'Lacrei@2026'
        );


        const mensagem = await $('h2*=Boas-vindas à Lacrei Saúde!');


        await mensagem.waitForDisplayed({
            timeout: 30000
        });


        console.log(
            'Mensagem encontrada:',
            await mensagem.getText()
        );


        await browser.pause(60000);


    });


});