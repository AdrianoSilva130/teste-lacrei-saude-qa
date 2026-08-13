Feature: Cadastro de usuário

  Scenario: Realizar cadastro com dados válidos
    Given que estou na página de cadastro
    When preencho o formulário de cadastro com dados válidos
    And envio o formulário de cadastro
    Then devo visualizar a confirmação do cadastro

  Scenario: Realizar cadastro com senhas incompatíveis
    Given que estou na página de cadastro
    When preencho o formulário de cadastro com senhas incompatíveis
    Then devo visualizar a mensagem "Senhas incompatíveis, tente novamente."