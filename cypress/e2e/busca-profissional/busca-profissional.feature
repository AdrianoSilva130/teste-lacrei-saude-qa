# language: pt

Funcionalidade: Busca de profissional de saúde

  Cenário: Buscar profissional de saúde
    Dado que estou na página de busca de profissionais
    Quando realizo uma busca por um profissional
    Então devo visualizar os resultados da busca

  Cenário: Contatar profissional de saúde
    Dado que realizei uma busca por um profissional
    E visualizei os resultados da busca
    Quando seleciono um profissional
    Então devo visualizar a opção de contato