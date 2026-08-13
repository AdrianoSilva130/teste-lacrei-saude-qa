import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
    cy.visit("/login");

    cy.get("#email")
        .should("be.visible");

    cy.get("#password")
        .should("be.visible");
});

When("seleciono a opção de esqueci minha senha com e-mail cadastrado", () => {
    cy.get('a[data-qa-id="redefinir-senha"]', {
        timeout: 30000
    })
        .should("be.visible")
        .click();

    cy.location("pathname", {
        timeout: 30000
    }).should("include", "/saude/paciente/redefinir-senha/");
});

When("solicito a recuperação da senha", () => {
    cy.get("#email", {
        timeout: 30000
    })
        .should("be.visible")
        .type(Cypress.env("LACREI_EMAIL"));

    cy.get('button[type="submit"]', {
        timeout: 30000
    })
        .should("be.visible")
        .click();
});

Then("devo visualizar a confirmação da solicitação", () => {
    cy.get("h3", {
        timeout: 30000
    })
        .should("be.visible")
        .and("contain.text", "Verifique seu e-mail para redefinir a senha");
});