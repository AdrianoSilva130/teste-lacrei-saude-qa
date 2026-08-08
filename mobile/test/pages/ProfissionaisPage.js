class ProfissionaisPage {

    get campoBusca() {
        return $('#campo-de-busca');
    }

    get botaoPesquisar() {
        return $('button[aria-label="Pesquisar"]');
    }

    async pesquisar(profissional) {
        await this.campoBusca.waitForDisplayed({
            timeout: 10000
        });

        await this.campoBusca.setValue(profissional);

        await this.botaoPesquisar.waitForDisplayed({
            timeout: 10000
        });

        await this.botaoPesquisar.click();
    }
}

module.exports = new ProfissionaisPage();