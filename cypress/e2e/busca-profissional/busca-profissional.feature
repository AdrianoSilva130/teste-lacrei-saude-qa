# language: pt

Funcionalidade: Busca e contato com profissional de saúde

  Cenário: Buscar profissional e validar contato
    Dado que estou na página de busca de profissionais
    Quando realizo uma busca por um profissional
    E seleciono um profissional
    E preencho o telefone para contato
    Então devo visualizar a mensagem de telefone inválido