# language: pt

Funcionalidade: Cadastro de usuário

  Como um novo usuário
  Quero realizar meu cadastro
  Para acessar a plataforma Lacrei Saúde

  Cenário: Realizar cadastro com dados válidos
    Dado que estou na página de cadastro
    Quando preencho o formulário de cadastro com dados válidos
    E envio o formulário de cadastro
    Então devo visualizar a confirmação do cadastro

    Cenário: Realizar cadastro com dados inválidos
    Dado que estou na página de cadastro
    Quando preencho o formulário com dados inválidos
    E envio o formulário de cadastro
    Então devo visualizar mensagens de validação