# language: pt

Funcionalidade: Recuperação de senha

  Cenário: Solicitar recuperação de senha
    Dado que estou na página de login
    Quando seleciono a opção de esqueci minha senha com e-mail cadastrado
    E solicito a recuperação da senha
    Então devo visualizar a confirmação da solicitação