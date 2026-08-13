# Desafio Técnico QA — Lacrei Saúde

Projeto desenvolvido para avaliação da qualidade da aplicação **Lacrei Saúde**, contemplando testes funcionais, testes exploratórios, automação Web, automação Mobile, testes de API, testes de performance, acessibilidade, responsividade e registro de defeitos.

O projeto foi estruturado com foco em **qualidade, rastreabilidade, estabilidade dos testes e segurança das credenciais**.

---

# Tecnologias utilizadas

- JavaScript
- Cypress
- Cucumber / Gherkin
- WebdriverIO
- Appium
- Postman
- PactumJS
- GraphQL
- Apache JMeter
- k6
- Lighthouse
- Git
- GitHub
- GitHub Actions
- Docker
- Faker.js

---

# Estrutura do projeto

```text
Lacrei-Saude/
│
├── .github/
│   └── workflows/
│
├── cypress/
│   ├── e2e/
│   │   ├── busca-profissional/
│   │   ├── cadastro/
│   │   └── recuperacao-senha/
│   ├── fixtures/
│   ├── step_definitions/
│   └── support/
│
├── docs/
│   ├── gherkin/
│   ├── acessibilidade.md
│   └── matriz-rastreabilidade.md
│
├── evidencias/
│   └── bugs/
│
├── mobile/
│   ├── config/
│   └── test/
│       ├── pages/
│       └── specs/
│
├── performance/
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
└── wdio.conf.js
1. Segurança das credenciais

As credenciais utilizadas nos testes automatizados não ficam armazenadas diretamente no código.

A configuração utiliza variáveis de ambiente:

LACREI_EMAIL
LACREI_PASSWORD
LACREI_RECOVERY_EMAIL

No ambiente local, as variáveis são carregadas por meio do .env.

No GitHub Actions, as credenciais são disponibilizadas utilizando GitHub Secrets, evitando a exposição de dados sensíveis no código-fonte.

O arquivo .env não deve ser versionado no repositório.

2. Testes funcionais

Foram realizados testes funcionais e exploratórios nos principais fluxos da aplicação.

Login

Validações realizadas:

Acesso à tela de login.
Preenchimento de e-mail.
Preenchimento de senha.
Login com credenciais válidas.
Login com credenciais inválidas.
Validação da mensagem de erro apresentada.
Cadastro

Validações realizadas:

Cadastro com dados válidos.
Validação dos campos obrigatórios.
Validação de e-mail.
Validação de senha.
Confirmação de senha.
Aceite dos termos e política de privacidade.
Validação da idade.
Fluxo pós-cadastro.
Cadastro com senhas incompatíveis.

Mensagem validada no cenário negativo:

Senhas incompatíveis, tente novamente.
Busca de profissionais

Foram realizados testes exploratórios e automatizados no fluxo de busca.

Foram avaliados:

Busca por profissional.
Busca utilizando diferentes formas de escrita.
Uso de acentos.
Uso de letras maiúsculas.
Uso da tecla Enter.
Busca após autenticação.

Durante os testes foram identificados comportamentos inconsistentes relacionados a:

Acentos.
Letras maiúsculas.
Tecla Enter.

Os defeitos estão documentados em evidencias/bugs/.

Recuperação de senha

Foi validado o fluxo:

Acessar a tela de login.
Selecionar Esqueci minha senha.
Informar um e-mail válido.
Solicitar o envio do link.
Validar a mensagem apresentada.

Mensagem validada:

Verifique seu e-mail para redefinir a senha
3. Automação Web — Cypress + Cucumber

A automação Web foi desenvolvida utilizando:

Cypress
Cucumber
Gherkin
Faker.js

Os testes estão organizados por funcionalidade:

cypress/
└── e2e/
    ├── cadastro/
    ├── busca-profissional/
    └── recuperacao-senha/
Cenários automatizados
Cadastro
Cadastro com dados válidos.
Cadastro com senhas incompatíveis.
Busca
Buscar profissional e validar o fluxo de contato/agendamento.
Recuperação
Solicitar recuperação de senha e validar a mensagem de confirmação.
Execução

Instalar as dependências:

npm install

Executar a suíte Cypress:

npm test

Ou:

npm run test:cypress

Abrir a interface do Cypress:

npm run test:cypress:open

Executar diretamente:

npx cypress run
4. Automação Mobile — Appium + WebdriverIO

Foi realizada automação Mobile utilizando:

Appium
WebdriverIO
Chrome no Android
Android Emulator
Page Object Model

Os testes estão organizados em:

mobile/
├── config/
└── test/
    ├── pages/
    └── specs/
Cenários automatizados
Login e busca
Login com credenciais válidas.
Busca de profissional.
Agendamento.
Validação do fluxo de contato.
Recuperação de senha
Acesso à recuperação de senha.
Preenchimento do e-mail.
Envio do link.
Validação da mensagem de confirmação.
Cenário negativo
Login com credenciais inválidas.
Validação da mensagem:
E-mail ou senha incorretos. Esqueceu a sua senha? Clique em "Esqueci minha senha" para recuperá-la.
Estabilidade

As esperas fixas com browser.pause() foram removidas.

Foram utilizadas esperas condicionais baseadas no estado dos elementos, como:

waitForDisplayed()
waitForClickable()
waitForEnabled()
waitForExist()
scrollIntoView()

Essa abordagem reduz a dependência de tempos fixos e melhora a estabilidade da automação.

Execução

Com o Android Emulator e o Appium Server iniciados:

npm run test:mobile

ou:

npx wdio run wdio.conf.js
5. Testes de API

Foram desenvolvidos testes utilizando diferentes abordagens:

Postman
PactumJS
GraphQL

Foram realizadas validações relacionadas a:

Requisições HTTP.
Respostas da API.
Dados retornados.
Contratos.
Fluxos de API.
Consultas GraphQL.

Os projetos e exemplos relacionados aos testes de API fazem parte do portfólio de exercícios desenvolvido durante a formação em QA.

6. Testes de performance

Foram utilizados:

k6
Apache JMeter

Os testes foram executados no ambiente de Staging com foco em operações relevantes da aplicação.

k6
Cenário 1 — Cadastro de usuário
VUs: 30
Duração: 30 segundos
Endpoint: POST /v1/lacreiid/user/

Resultados registrados:

Métrica	Resultado
VUs	30
Duração	30s
Requisições concluídas	12
Cadastros realizados	100%
Falhas HTTP	0%
Tempo médio	34,23s
Mediana	34,21s
P90	51,80s
P95	53,84s
Tempo máximo	55,71s
Análise

Todas as requisições concluídas retornaram sucesso HTTP 201, sem falhas HTTP.

Foi observada, entretanto, latência elevada, representando um ponto de atenção para futuras otimizações.

Como não foi definido um SLA específico para o endpoint, o resultado foi registrado como observação de performance e não como falha de requisito.

Cenário 2 — Busca de profissionais

Fluxo:

Login → Busca de profissionais

Endpoint:

GET /v1/lacreisaude/professionals/?search=medico

Resultados registrados:

Métrica	Resultado
VUs	30
Duração	30s
Requisições	36
Login realizado	100%
Busca realizada	100%
Falhas HTTP	0%
Tempo médio	2,24s
Mediana	2,10s
P90	3,83s
P95	4,09s
Tempo máximo	4,46s
Análise

O cenário apresentou 100% de sucesso nas requisições executadas e 0% de falhas HTTP.

7. Acessibilidade

Foi realizada avaliação utilizando:

Google Lighthouse
Navegação por teclado
TAB
SHIFT + TAB
Foco visual
ENTER / ESPAÇO
Resultado

Lighthouse Accessibility: 96/100

Foram identificados pontos relacionados a:

Elementos de perfil e logout durante navegação por teclado.
Recurso VLibras com problema de carregamento.

A documentação está disponível em:

docs/acessibilidade.md
8. Responsividade

Foram realizadas validações em diferentes resoluções.

Mobile

390x844

Resultado:

✅ Aprovado

Validações:

Adaptação do layout.
Ausência de cortes.
Ausência de sobreposição.
Acesso aos menus.
Funcionamento dos formulários.
Desktop

1366x768

Resultado:

⚠️ Parcial

Foram identificados problemas de sobreposição de texto e imagens nas seções:

O que é a Lacrei Saúde.
Missão, Visão e Valores.

Também foi identificado problema relacionado ao carregamento do VLibras.

9. Bugs encontrados

Os defeitos foram registrados seguindo uma estrutura padronizada contendo:

Descrição.
Severidade.
Prioridade.
Impacto.
Ambiente.
Categoria.
Status.
Pré-condições.
Passos para reprodução.
Resultado esperado.
Resultado atual.
Evidências.

Os registros estão disponíveis em:

evidencias/bugs/
BUG-001

Pesquisa de profissionais não funciona com a tecla Enter

Severidade: Média
Prioridade: Média

A busca não é executada corretamente utilizando Enter.

BUG-002

Busca de profissionais não retorna resultados com acentos ou letras maiúsculas

Severidade: Média
Prioridade: Média

A busca apresenta comportamento inconsistente com termos contendo acentos ou letras maiúsculas.

BUG-003

Número de celular válido é rejeitado ao solicitar código de confirmação

Severidade: Alta
Prioridade: Alta

O fluxo de agendamento fica bloqueado após a tentativa de envio do código.

BUG-004

Cadastro aceita e-mail com domínio inexistente

Severidade: Média
Prioridade: Média

O sistema permite avançar no cadastro mesmo utilizando um domínio de e-mail inexistente.

10. Rastreabilidade

A rastreabilidade entre requisitos, casos de teste, automação e defeitos foi documentada em:

docs/matriz-rastreabilidade.md

A matriz relaciona:

Requisito
   ↓
Caso de teste
   ↓
Tipo de teste
   ↓
Automação
   ↓
Bug relacionado
   ↓
Resultado
11. BDD e Gherkin

Os cenários automatizados Web utilizam BDD/Gherkin.

Os arquivos .feature estão organizados em:

cypress/e2e/

A documentação adicional encontra-se em:

docs/gherkin/

Exemplo:

Feature: Recuperação de senha

  Scenario: Recuperar senha com e-mail válido
    Given que o usuário está na tela de login
    When acessar a opção de recuperação de senha
    And informar um e-mail válido
    And solicitar o envio do link
    Then deverá visualizar a mensagem de confirmação
12. Matriz de resultados

Os principais cenários executados estão rastreados na documentação:

docs/matriz-rastreabilidade.md

A matriz contempla testes:

Manuais.
Web.
Mobile.
Negativos.
API.
Performance.
Acessibilidade.
Bugs relacionados.
13. CI/CD — GitHub Actions

O projeto possui workflow configurado com GitHub Actions para automação dos testes Cypress.

O workflow está localizado em:

.github/workflows/

As credenciais utilizadas pelo CI são disponibilizadas por meio de GitHub Secrets, sem armazenamento de informações sensíveis no código.

Os cenários Cypress estão configurados para execução automatizada no pipeline.

A execução no ambiente de CI ainda apresenta um comportamento específico de autenticação no ambiente de Staging, enquanto a suíte permanece validada localmente.

14. Configuração e reprodutibilidade

As principais ferramentas e dependências estão declaradas no:

package.json

e:

package-lock.json

Scripts disponíveis:

npm test

Executa a suíte Cypress.

npm run test:cypress

Executa os testes Cypress em modo headless.

npm run test:cypress:open

Abre a interface do Cypress.

npm run test:mobile

Executa os testes Mobile com WebdriverIO.

15. Como executar o projeto
Instalação
git clone https://github.com/AdrianoSilva130/teste-lacrei-saude-qa.git

Acesse o diretório do projeto:

cd teste-lacrei-saude-qa

Instale as dependências:

npm install

Configure as variáveis de ambiente locais no arquivo .env:

LACREI_EMAIL=seu_email
LACREI_PASSWORD=sua_senha
LACREI_RECOVERY_EMAIL=seu_email_de_recuperacao

Nunca versione o .env.

Cypress
npm test

ou:

npx cypress run
WebdriverIO / Appium
Inicie o Android Emulator.
Verifique o dispositivo:
adb devices
Inicie o Appium Server.
Execute:
npm run test:mobile
k6
k6 run performance/<arquivo>.js
16. Evidências

As evidências dos defeitos encontrados estão organizadas em:

evidencias/
└── bugs/

Também estão disponíveis arquivos relacionados a:

Bugs funcionais.
Acessibilidade.
Responsividade.
VLibras.
Cadastro.
Validações de interface.
17. Conclusão

O projeto contempla diferentes dimensões da qualidade de software, incluindo:

Testes funcionais.
Testes exploratórios.
Automação Web.
Automação Mobile.
Testes de API.
Testes de performance.
Testes de acessibilidade.
Testes de responsividade.
BDD/Gherkin.
Cenários positivos e negativos.
Rastreabilidade.
Gestão de defeitos.
Evidências.
Segurança de credenciais.
GitHub Actions.

As melhorias realizadas após a avaliação incluem:

Remoção de credenciais do código.
Utilização de variáveis de ambiente e GitHub Secrets.
Padronização dos scripts do projeto.
Inclusão de matriz de rastreabilidade.
Remoção de browser.pause() da automação Mobile.
Utilização de esperas condicionais.
Inclusão de cenário negativo de login Mobile.
Inclusão de cenário negativo de cadastro com senhas incompatíveis.
Padronização dos registros de bugs.

O projeto busca demonstrar não apenas a execução de testes, mas também uma abordagem estruturada de investigação, automação, documentação, rastreabilidade e melhoria contínua da qualidade.

👨‍💻 Autor

Adriano Silva

Projeto desenvolvido como parte do desafio técnico de QA da Lacrei Saúde, com foco em qualidade, testes funcionais, automação Web e Mobile, API, performance, acessibilidade, responsividade e análise de defeitos.