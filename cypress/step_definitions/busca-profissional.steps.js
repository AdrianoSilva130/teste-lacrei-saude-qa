import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de busca de profissionais", () => {
    cy.visit("/login");

    cy.get("#email")
        .should("be.visible")
        .type(Cypress.env("LACREI_EMAIL"));

    cy.get("#password")
        .should("be.visible")
        .type(Cypress.env("LACREI_PASSWORD"));

    cy.get('button[type="submit"]')
        .should("be.visible")
        .click();

    cy.location("pathname", {
        timeout: 30000
    }).should("not.eq", "/login");

    cy.get("#campo-de-busca", {
        timeout: 30000
    }).should("be.visible");
});

When("realizo uma busca por um profissional", () => {
    cy.get("#campo-de-busca", {
        timeout: 30000
    })
        .should("be.visible")
        .clear()
        .type("medico{enter}");

    cy.get("#atendimentos", {
        timeout: 30000
    }).should("be.visible");
});

When("seleciono um profissional", () => {
    cy.contains("button", "Agendar consulta", {
        timeout: 30000
    })
        .should("be.visible")
        .first()
        .click();

    cy.get('button[aria-label="Ir para informações de contato da pessoa profissional"]', {
        timeout: 30000
    })
        .should("be.visible")
        .first()
        .click();
});

When("preencho o telefone para contato", () => {
    cy.get("#requesterPhoneNumber", {
        timeout: 30000
    })
        .should("be.visible")
        .clear()
        .type("(11) 99999-9999");

    cy.get('button[aria-label="Enviar código para o número de celular inserido"]', {
        timeout: 30000
    })
        .should("be.visible")
        .click();
});

Then("devo visualizar a mensagem de telefone inválido", () => {
    cy.contains(/Número de celular.*incorreto/i, {
        timeout: 30000
    }).should("be.visible");
});