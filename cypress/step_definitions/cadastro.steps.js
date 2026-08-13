import { faker } from "@faker-js/faker";
import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { When } from "@badeball/cypress-cucumber-preprocessor";
import { Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de cadastro", () => {
    cy.visit("https://paciente-staging.lacreisaude.com.br/saude/paciente/cadastrar/");
});

When("preencho o formulário de cadastro com dados válidos", () => {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = `qa.${Date.now()}@teste.com`;
    const senha = "Teste@123";

    cy.get("#firstName")
        .type(nome);

    cy.get("#lastName")
        .type(sobrenome);

    cy.get("#email")
        .type(email);

    cy.get("#email2")
        .type(email);

    cy.get("#password1")
        .type(senha);

    cy.get("#password2")
        .type(senha);

    cy.get("#acceptedPrivacyDocument")
        .check();

    cy.get("#is18YearsOldOrMore")
        .check();
});

When("envio o formulário de cadastro", () => {
    cy.get('button[aria-label="Criar cadastro no site Lacrei Saúde"]', {
        timeout: 30000
    })
        .should("be.visible")
        .should("not.be.disabled")
        .click();
});

Then("devo visualizar a confirmação do cadastro", () => {
    cy.contains("Estamos quase lá...", {
        timeout: 30000
    }).should("be.visible");
});