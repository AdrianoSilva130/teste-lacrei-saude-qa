class SearchPage {

    get campoBusca() {
        return $('#campo-de-busca');
    }

    get botaoPesquisar() {
        return $('button[aria-label="Pesquisar"]');
    }

    get botaoAgendarAtendimento() {
        return $('#atendimentos');
    }

    async pesquisar(texto) {

        await this.campoBusca.waitForDisplayed({
            timeout: 10000
        });

        await this.campoBusca.setValue(texto);

        await this.botaoPesquisar.waitForDisplayed({
            timeout: 10000
        });

        await this.botaoPesquisar.waitForClickable({
            timeout: 10000
        });

        await this.botaoPesquisar.click();

        console.log('Pesquisa enviada');

        // Aguarda a tela de resultados disponibilizar
        // o botão de agendamento.
        await this.botaoAgendarAtendimento.waitForDisplayed({
            timeout: 30000
        });

        console.log('Tela de resultados carregada');
        console.log('Botão Agendar consulta encontrado');
    }
}

module.exports = new SearchPage();