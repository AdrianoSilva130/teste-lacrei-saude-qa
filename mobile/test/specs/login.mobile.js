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

        console.log('Login realizado com sucesso!');

        await SearchPage.campoBusca.waitForDisplayed({
            timeout: 30000
        });

        console.log('Página de busca carregada!');

        await SearchPage.pesquisar('medico');

        console.log('Pesquisa realizada com sucesso!');

        await LoginPage.agendarAtendimento();

        console.log('Fluxo de agendamento executado');
    });

    it('Deve realizar recuperação de senha', async () => {

        await browser.url(env.BASE_URL);

        await LoginPage.recuperarSenha(
            env.RECOVERY_EMAIL
        );
    });

    it('Deve impedir login com credenciais inválidas', async () => {

        await browser.url(
            'https://paciente-staging.lacreisaude.com.br/login/'
        );

        await LoginPage.loginComErro(
            'email-invalido@teste.com',
            'SenhaInvalida@123'
        );

        const mensagemErro = $(
            'span*=E-mail ou senha incorretos. Esqueceu a sua senha?'
        );

        await mensagemErro.waitForDisplayed({
            timeout: 30000
        });

        await expect(mensagemErro).toHaveText(
            'E-mail ou senha incorretos. Esqueceu a sua senha? Clique em "Esqueci minha senha" para recuperá-la.'
        );
    });
});