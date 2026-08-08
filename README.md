# Desafio Técnico QA - Lacrei Saúde

Projeto desenvolvido para avaliação da qualidade da aplicação **Lacrei Saúde**, contemplando testes funcionais, automação Web, automação Mobile, testes de desempenho, acessibilidade, responsividade e registro de bugs encontrados durante a execução.

---

## Tecnologias utilizadas

* JavaScript
* Cypress
* WebdriverIO
* Appium
* K6
* Gherkin
* Git
* GitHub
* GitHub Actions

---

## Estrutura do projeto

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
│   └── gherkin/
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
```

---

# Testes Funcionais

Foram realizados testes funcionais nos principais fluxos da aplicação, tanto manualmente quanto por meio de automação.

## Login

Validação do fluxo de login:

* Acessar a página de login.
* Informar e-mail e senha.
* Clicar em **Entrar**.
* Validar o acesso à área de profissionais.

---

## Cadastro

Foram realizadas validações relacionadas ao fluxo de cadastro, incluindo:

* Cadastro com dados válidos.
* Validação de campos.
* Validação de e-mail.
* Validação de senha.
* Fluxo pós-cadastro.

---

## Busca de profissionais

Foram realizados testes no fluxo de busca de profissionais, considerando diferentes formas de preenchimento dos termos pesquisados.

Durante os testes foram identificados problemas relacionados à utilização de:

* Acentos.
* Letras maiúsculas.
* Tecla ENTER para executar a pesquisa.

Os problemas encontrados foram registrados como bugs e possuem evidências no projeto.

---

## Recuperação de senha

Foi validado o fluxo de recuperação de senha:

* Acessar **Esqueci minha senha**.
* Informar um e-mail.
* Solicitar o envio do link.
* Validar a mensagem apresentada após o envio.

Mensagem validada:

```text
Verifique seu e-mail para redefinir a senha
```

---

# Automação Web — Cypress

O projeto possui automação Web utilizando **Cypress**.

Os testes estão organizados por funcionalidade:

```text
cypress/
└── e2e/
    ├── busca-profissional/
    ├── cadastro/
    └── recuperacao-senha/
```

Também fazem parte da estrutura:

```text
cypress/
├── fixtures/
├── step_definitions/
└── support/
```

A configuração do Cypress está disponível em:

```text
cypress.config.js
```

### Execução

Para abrir o Cypress:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npx cypress run
```

---

# Testes Mobile

Foi realizada automação do fluxo Mobile utilizando:

* **Appium**
* **WebdriverIO**
* **Chrome no Android**
* **Android Emulator**

A estrutura dos testes Mobile está organizada da seguinte forma:

```text
mobile/
├── config/
└── test/
    ├── pages/
    └── specs/
```

O projeto utiliza Page Object para organização dos elementos e ações dos testes.

---

## Cenário Mobile — Recuperação de senha

Foi automatizado o fluxo de recuperação de senha no ambiente Mobile.

O cenário realiza:

1. Acesso à aplicação.
2. Localização de **Esqueci minha senha**.
3. Clique na opção.
4. Preenchimento do e-mail.
5. Clique em **Enviar link**.
6. Validação da mensagem de confirmação.

A mensagem validada foi:

```text
Verifique seu e-mail para redefinir a senha
```

### Resultado da execução

O teste foi executado com sucesso utilizando:

```text
Chrome on Android
```

Resultado:

```text
Spec Files: 1 passed, 1 total
100% completed
```

Comando utilizado:

```bash
npx wdio run wdio.conf.js
```

---

# 📊 Testes de Desempenho — K6

Foram realizados testes de desempenho utilizando o **K6** para validar o tempo de resposta e a estabilidade das principais operações da API.

## Cenário 1 — Busca de Profissionais

**Endpoint:**

```text
GET /v1/lacreisaude/professionals/?search=medico
```

### Configuração do teste

* Ferramenta: K6
* Usuários virtuais (VUs): 30
* Duração: 30 segundos

### Critérios avaliados

* Tempo de resposta: P95 < 2 segundos.
* Taxa de erro HTTP inferior a 1%.

### Resultado

| Métrica              | Resultado |
| -------------------- | --------: |
| Requisições          |       173 |
| Usuários simultâneos |        30 |
| Tempo médio          |    5,78 s |
| P95                  |    6,61 s |
| Erros HTTP           |        0% |

### Conclusão

O endpoint respondeu corretamente durante toda a execução, sem apresentar falhas HTTP.

Entretanto, o tempo de resposta excedeu o limite estabelecido de 2 segundos, indicando degradação de desempenho sob carga.

---

## Cenário 2 — Cadastro de Usuário

**Endpoint:**

```text
POST /v1/lacreiid/user/
```

### Configuração do teste

* Ferramenta: K6
* Usuários virtuais (VUs): 30
* Duração: 30 segundos
* E-mails gerados dinamicamente para evitar duplicidade de cadastro.

### Critérios avaliados

* Tempo de resposta: P95 < 2 segundos.
* Taxa de erro HTTP inferior a 1%.

### Resultado

| Métrica                | Resultado |
| ---------------------- | --------: |
| Requisições concluídas |        13 |
| Usuários simultâneos   |        30 |
| Tempo médio            |   31,45 s |
| P95                    |   53,38 s |
| Tempo mínimo           |    7,00 s |
| Tempo máximo           |   55,30 s |
| Erros HTTP             |        0% |

### Conclusão

O endpoint de cadastro manteve estabilidade durante a execução, sem apresentar erros HTTP.

No entanto, o tempo de resposta foi significativamente superior ao limite esperado, alcançando um P95 de 53,38 segundos.

Além disso, apenas 13 requisições foram concluídas durante os 30 segundos de teste, indicando degradação de desempenho sob carga e evidenciando oportunidade de otimização para esse fluxo.

---

# 📈 Relatório Lighthouse

O relatório completo gerado pelo Google Lighthouse encontra-se em:

```text
performance/lighthouse-report.html
```

Para visualizar o relatório, basta abrir o arquivo `lighthouse-report.html` em qualquer navegador.

---

# ♿ Testes de Acessibilidade

Foi realizada validação utilizando o **Lighthouse** e testes manuais de navegação por teclado.

## Resultado Lighthouse

**Acessibilidade: 96/100**

### Validações realizadas

* Navegação utilizando a tecla TAB.
* Navegação reversa utilizando SHIFT + TAB.
* Validação de foco visual.
* Acionamento de botões utilizando ENTER/ESPAÇO.
* Validação de links via teclado.
* Verificação de ausência de armadilhas de foco.

### Insights encontrados

Foi identificado que os elementos de **perfil e logout** não são acessíveis durante a navegação utilizando a tecla TAB.

Também foi identificado um problema no recurso **VLibras**, onde o botão permite interação, porém o recurso não é carregado devido a erro no carregamento do script.

A documentação relacionada aos testes de acessibilidade está disponível em:

```text
docs/acessibilidade.md
```

---

# 📱 Testes de Responsividade

Foram realizados testes em diferentes resoluções.

## Mobile

**Resolução:** 390x844

**Resultado:** ✅ Aprovado

### Validações realizadas

* Layout adaptado ao tamanho da tela.
* Elementos sem cortes ou sobreposição.
* Botões e menus acessíveis.
* Formulários funcionais.
* Navegação adequada.

---

## Desktop

**Resolução:** 1366x768

**Resultado:** ⚠️ Parcial

### Insights encontrados

Foi identificada sobreposição parcial de texto e imagens nas seções:

* **O que é a Lacrei Saúde**
* **Missão, Visão e Valores**

Também foi identificado que o recurso **VLibras** não é carregado corretamente.

---

# 🐞 Bugs encontrados

Durante os testes manuais foram identificados problemas funcionais e de interface.

As evidências estão organizadas em:

```text
evidencias/
└── bugs/
```

## BUG-001 — Validação do número de celular

Durante o fluxo que utiliza o número de celular para envio de código, mesmo utilizando um formato aceito pela interface, a aplicação apresentou a mensagem:

```text
Número de celular incorreto. Digite novamente.
```

O fluxo ficou impedido de prosseguir utilizando o envio do código pelo celular.

---

## BUG-002 — Busca com acentos e letras maiúsculas

Foi identificado comportamento inconsistente na busca quando os termos pesquisados possuem acentos ou letras maiúsculas.

Exemplos:

```text
médico
São Paulo
```

A busca apresenta comportamento diferente quando os termos são utilizados sem acentos e em letras minúsculas.

---

## BUG-003 — Busca utilizando a tecla ENTER

Foi identificado que pressionar a tecla **ENTER** após informar o termo de pesquisa não executa a busca.

O comportamento observado foi:

* Digitar o termo.
* Pressionar ENTER.
* Busca não é executada.

Ao clicar no botão de busca com o mouse, a pesquisa é executada.

---

## BUG-004 — Problema identificado durante os testes

Um quarto problema foi registrado durante a execução dos testes manuais.

As respectivas evidências estão disponíveis no diretório:

```text
evidencias/bugs/
```

---

# 📝 BDD e Gherkin

O projeto possui documentação de cenários utilizando **BDD/Gherkin**.

Os arquivos estão organizados em:

```text
docs/
└── gherkin/
```

A utilização do Gherkin permite estruturar os comportamentos esperados da aplicação de forma clara e organizada.

Exemplo:

```gherkin
Funcionalidade: Recuperação de senha

Cenário: Recuperar senha com e-mail válido

Dado que o usuário está na tela de login
Quando acessar a opção de recuperação de senha
E informar um e-mail válido
E solicitar o envio do link
Então deverá visualizar a mensagem de confirmação
```

---

# 📋 Resultado dos testes Mobile

| ID     | Funcionalidade | Cenário               | Resultado               |
| ------ | -------------- | --------------------- | ----------------------- |
| CT-001 | Cadastro       | Cadastro válido       | ✅ Passou                |
| CT-002 | Cadastro       | Cadastro inválido     | A executar              |
| CT-003 | Pós-cadastro   | Buscar profissional   | ⚠️ Passou com ressalvas |
| CT-004 | Busca          | Buscar profissional   | ⚠️ Passou com ressalvas |
| CT-005 | Contato        | Contatar profissional | Bloqueado               |
| CT-006 | Recuperação    | Esqueci minha senha   | ✅ Passou                |

---

# 📸 Evidências

As evidências dos bugs encontrados durante os testes estão organizadas em:

```text
evidencias/
└── bugs/
```

As evidências têm como objetivo complementar os registros dos problemas identificados durante a execução dos testes.

---

# 🔄 CI/CD

O projeto possui estrutura de workflows utilizando **GitHub Actions**:

```text
.github/
└── workflows/
```

Os workflows permitem automatizar a execução das atividades de teste configuradas no projeto.

---

# ▶️ Como executar o projeto

## Instalação

Clone o repositório:

```bash
git clone https://github.com/AdrianoSilva130/teste-lacrei-saude-qa.git
```

Acesse a pasta:

```bash
cd Lacrei-Saude
```

Instale as dependências:

```bash
npm install
```

---

## Cypress

Abrir interface do Cypress:

```bash
npx cypress open
```

Executar em modo headless:

```bash
npx cypress run
```

---

## WebdriverIO / Appium

Para executar os testes Mobile:

1. Inicie o Android Emulator.
2. Inicie o Appium Server.
3. Execute:

```bash
npx wdio run wdio.conf.js
```

---

## K6

Os testes de desempenho estão localizados em:

```text
performance/
```

A execução é feita utilizando o K6:

```bash
k6 run performance/<arquivo>.js
```

---

# 📚 Documentação

Documentação complementar disponível no projeto:

```text
docs/
├── gherkin/
└── acessibilidade.md
```

As evidências dos bugs estão disponíveis em:

```text
evidencias/
└── bugs/
```

---

# 🎯 Conclusão

O projeto permitiu avaliar diferentes aspectos da aplicação Lacrei Saúde por meio de testes manuais e automatizados.

Foram aplicadas diferentes abordagens de qualidade, incluindo:

* Testes funcionais.
* Automação Web com Cypress.
* Automação Mobile com Appium e WebdriverIO.
* Testes de desempenho com K6.
* Testes de acessibilidade.
* Testes de responsividade.
* BDD/Gherkin.
* Registro e documentação de bugs.
* Coleta de evidências.
* Integração com GitHub Actions.

Os testes de desempenho demonstraram que os endpoints avaliados não apresentaram erros HTTP durante os cenários executados, porém apresentaram tempos de resposta superiores aos critérios definidos.

Também foram identificados pontos de melhoria relacionados à busca, validação de telefone, acessibilidade, VLibras e responsividade.

---

# 👨‍💻 Autor

**Adriano Silva**

Projeto desenvolvido como parte do desafio técnico de QA da **Lacrei Saúde**, com foco em avaliação de qualidade, testes funcionais, automação, Mobile, performance, acessibilidade e responsividade.
