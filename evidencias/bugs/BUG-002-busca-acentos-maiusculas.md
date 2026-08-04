# BUG-002 — Busca de profissionais não retorna resultados com acentos ou letras maiúsculas

## Descrição

A busca de profissionais não retorna resultados quando o termo pesquisado contém acentos ou letras maiúsculas. A pesquisa funciona somente quando os termos são digitados sem acentos e em letras minúsculas.

## Passos para reprodução

1. Acessar a plataforma Lacrei Saúde.
2. Realizar login.
3. Acessar a funcionalidade de busca de profissionais.
4. Informar um termo de pesquisa contendo acentos ou letras maiúsculas.
5. Executar a pesquisa.
6. Observar os resultados apresentados.
7. Repetir a pesquisa utilizando o mesmo termo sem acentos e em letras minúsculas.

## Resultado esperado

A busca deve ser capaz de identificar e retornar resultados independentemente da utilização de letras maiúsculas, minúsculas ou acentos, considerando variações equivalentes dos termos pesquisados.

## Resultado atual

Ao realizar a pesquisa utilizando termos com acentos ou letras maiúsculas, a plataforma informa que não encontrou resultados.

Quando os mesmos termos são pesquisados sem acentos e utilizando letras minúsculas, os resultados são apresentados corretamente.

### Exemplos observados

- `médico` → nenhum resultado encontrado.
- `São Paulo` → nenhum resultado encontrado.
- Termos sem acentos e em letras minúsculas → resultados encontrados.

## Impacto

Médio

## Prioridade

Média

## Categoria

Funcionalidade / Usabilidade / Busca

## Status

Aberto

## Evidência

Adicionar print ou vídeo demonstrando:

1. Pesquisa utilizando termo com acento ou letra maiúscula sem resultados.
2. Pesquisa utilizando o mesmo termo sem acento e em letras minúsculas com resultados.