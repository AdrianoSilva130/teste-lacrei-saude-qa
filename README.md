# Desafio Técnico QA - Lacrei Saúde

## Tecnologias utilizadas

- JavaScript
- WebdriverIO
- Appium
- K6
- Git

---

## Estrutura do projeto

```text
mobile/
performance/
README.md
```

---

## Testes Funcionais

### Login

- Acessar a página de login
- Informar e-mail e senha
- Clicar em Entrar
- Validar acesso à área de profissionais

---

## 📊 Testes de Desempenho (k6)

Foram realizados testes de desempenho utilizando o **k6** para validar o tempo de resposta e a estabilidade das principais operações da API.

### Cenário 1 – Busca de Profissionais

**Endpoint:**
```
GET /v1/lacreisaude/professionals/?search=medico
```

**Configuração do teste**

- Ferramenta: k6
- Usuários virtuais (VUs): 30
- Duração: 30 segundos

**Critérios avaliados**

- Tempo de resposta (P95 < 2 segundos)
- Taxa de erro HTTP inferior a 1%

**Resultado**

| Métrica | Resultado |
|---------|----------:|
| Requisições | 173 |
| Usuários simultâneos | 30 |
| Tempo médio | 5,78 s |
| P95 | 6,61 s |
| Erros HTTP | 0% |

**Conclusão**

O endpoint respondeu corretamente durante toda a execução, sem apresentar falhas HTTP. Entretanto, o tempo de resposta excedeu o limite estabelecido de 2 segundos, indicando degradação de desempenho sob carga.

---

### Cenário 2 – Cadastro de Usuário

**Endpoint:**
```
POST /v1/lacreiid/user/
```

**Configuração do teste**

- Ferramenta: k6
- Usuários virtuais (VUs): 30
- Duração: 30 segundos
- E-mails gerados dinamicamente para evitar duplicidade de cadastro

**Critérios avaliados**

- Tempo de resposta (P95 < 2 segundos)
- Taxa de erro HTTP inferior a 1%

**Resultado**

| Métrica | Resultado |
|---------|----------:|
| Requisições concluídas | 13 |
| Usuários simultâneos | 30 |
| Tempo médio | 31,45 s |
| P95 | 53,38 s |
| Tempo mínimo | 7,00 s |
| Tempo máximo | 55,30 s |
| Erros HTTP | 0% |

**Conclusão**

O endpoint de cadastro manteve estabilidade durante a execução, sem apresentar erros HTTP. No entanto, o tempo de resposta foi significativamente superior ao limite esperado, alcançando um P95 de 53,38 segundos. Além disso, apenas 13 requisições foram concluídas durante os 30 segundos de teste, indicando degradação de desempenho sob carga e evidenciando oportunidade de otimização para esse fluxo.

### Relatório Lighthouse

O relatório completo gerado pelo Google Lighthouse encontra-se em:

```text
performance/lighthouse-report.html
```

Para visualizar o relatório, basta abrir o arquivo `lighthouse-report.html` em qualquer navegador.

## Documentação

- [Testes de Acessibilidade](./docs/acessibilidade.md)