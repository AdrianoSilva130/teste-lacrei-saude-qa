class SearchPage {

    get campoBusca() {
        return $('#campo-de-busca');
    }

    get botaoPesquisar() {
        return $('button[aria-label="Pesquisar"]');
    }

    async pesquisar(texto) { 
        await this.campoBusca.waitForDisplayed({ timeout: 10000 }); 
        await this.campoBusca.setValue(texto); 
        await this.botaoPesquisar.waitForDisplayed({ timeout: 10000 }); 
        await this.botaoPesquisar.click(); 

        console.log('Primeiro clique no botão pesquisar!');
         
        await browser.pause(1000); 
        await this.botaoPesquisar.click();

        console.log('Segundo clique no botão pesquisar!');
    }
}

module.exports = new SearchPage();

