const env = require('../../config/env');
const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');

describe('Login Mobile - Lacrei Saúde', () => {

    beforeEach(async () => {
        await browser.reloadSession();
    });

    it('Deve realizar login com sucesso e pesquisar profissional', async () => {

        await browser.url(env.BASE_URL);

        await LoginPage.login(
            env.EMAIL,
            env.PASSWORD
        );

        await browser.pause(5000);

        console.log('Login realizado com sucesso!');

        await SearchPage.campoBusca.waitForDisplayed({
            timeout: 30000
        });

        console.log('Página de busca carregada!');

        await SearchPage.pesquisar('medico');

        await browser.pause(5000);

        console.log('Pesquisa realizada com sucesso!');

        console.log(
            'URL após pesquisa:',
            await browser.getUrl()
        );

        await LoginPage.agendarAtendimento();

        console.log('Fluxo de agendamento executado');
    });

    it('Deve realizar recuperação de senha', async () => {

        await browser.url(env.BASE_URL);

        await LoginPage.recuperarSenha(
            env.RECOVERY_EMAIL
        );

    });
});

