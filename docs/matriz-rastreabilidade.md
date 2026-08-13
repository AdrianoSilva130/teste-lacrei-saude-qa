# Matriz de Rastreabilidade — Lacrei Saúde

## Requisitos e casos de teste

| ID | Funcionalidade | Caso de teste | Tipo de teste | Automação | Bug relacionado | Resultado |
|---|---|---|---|---|---|---|
| CT-001 | Cadastro | Cadastro com dados válidos | Funcional / Web | Cypress + Cucumber | — | ✅ Passou |
| CT-002 | Cadastro | Cadastro com dados inválidos | Funcional / Web | Cypress + Cucumber | BUG-004 | ✅ Passou |
| CT-003 | Pós-cadastro | Buscar profissional após cadastro | Funcional / Mobile | Appium + WebdriverIO | BUG-002 | ⚠️ Passou com ressalvas |
| CT-004 | Busca | Buscar profissional | Funcional / Web + Mobile | Cypress + Appium/WebdriverIO | BUG-002 / BUG-003 | ✅ Passou |
| CT-005 | Contato | Contatar profissional | Funcional / Mobile | Appium + WebdriverIO | BUG-003 | ⚠️ Bloqueado |
| CT-006 | Recuperação | Recuperação de senha | Funcional / Web + Mobile | Cypress + Appium/WebdriverIO | — | ✅ Passou |

## Cenários automatizados — Cypress

| ID | Funcionalidade | Cenário | Arquivo | Resultado |
|---|---|---|---|---|
| CY-001 | Cadastro | Realizar cadastro com dados válidos | `cypress/e2e/cadastro/cadastro.feature` | ✅ Passou |
| CY-002 | Cadastro | Realizar cadastro com senhas incompatíveis | `cypress/e2e/cadastro/cadastro.feature` | ✅ Passou |
| CY-003 | Busca | Buscar profissional e validar contato | `cypress/e2e/busca-profissional/busca-profissional.feature` | ✅ Passou |
| CY-004 | Recuperação | Solicitar recuperação de senha | `cypress/e2e/recuperacao-senha/recuperacao-senha.feature` | ✅ Passou |

## Cenários automatizados — Mobile

| ID | Funcionalidade | Cenário | Arquivo | Resultado |
|---|---|---|---|---|
| MOB-001 | Login / Busca | Login com sucesso e pesquisa de profissional | `mobile/test/specs/login.mobile.js` | ✅ Passou |
| MOB-002 | Recuperação | Recuperação de senha | `mobile/test/specs/login.mobile.js` | ✅ Passou |
| MOB-003 | Login | Login com credenciais inválidas | `mobile/test/specs/login.mobile.js` | ✅ Passou |

## Defeitos encontrados

| Bug | Funcionalidade | Severidade | Prioridade | Caso relacionado | Automação relacionada |
|---|---|---|---|---|---|
| BUG-001 | Pesquisa com Enter | Média | Média | CT-004 | CY-003 |
| BUG-002 | Busca com acentos/maiúsculas | Média | Média | CT-003 / CT-004 | CY-003 |
| BUG-003 | Validação de celular | Alta | Alta | CT-005 | CY-003 / MOB-001 |
| BUG-004 | Cadastro com domínio inexistente | Média | Média | CT-002 | — |

## Tipos de validação

### Testes manuais

- Fluxos funcionais
- Testes exploratórios
- Responsividade
- Acessibilidade
- Validação de comportamentos negativos
- Registro de bugs e evidências

### Testes automatizados

- Cypress + Cucumber/Gherkin
- Appium + WebdriverIO
- Cenários positivos
- Cenários negativos
- Validações de mensagens e estados da interface

### Testes de performance

- k6
- Apache JMeter

### Testes de API

- Postman
- PactumJS
- GraphQL

## Observação sobre CI/CD

Os testes automatizados estão implementados e executados localmente com sucesso.

O workflow do GitHub Actions permanece configurado para execução da suíte Cypress, porém a autenticação no ambiente de staging ainda apresenta comportamento específico no CI e permanece em investigação.