# BUG - Botão VLibras não carrega recurso de acessibilidade

## ID
BUG-003

## Título
Botão VLibras permite clique, porém recurso de acessibilidade não é carregado.

## Ambiente
- Navegador: Google Chrome
- Resolução: 1366x768
- Ambiente: Lacrei Saúde (Staging)

## Pré-condição
Usuário acessa a página inicial da aplicação.

## Passos para reproduzir

1. Acessar a página da Lacrei Saúde.
2. Clicar no botão de acessibilidade VLibras.
3. Verificar o comportamento apresentado.
4. Abrir o Console do navegador para verificar erros.

## Resultado esperado

Ao clicar no botão VLibras, o recurso de tradução em Libras deve ser carregado e disponibilizado ao usuário.

## Resultado atual

O botão permite interação pelo clique, porém o recurso VLibras não é aberto.

Foi identificado erro no console:

```
Refused to execute script because its MIME type ('application/node') is not executable
```

## Impacto

Usuários que dependem do recurso de acessibilidade em Libras ficam impossibilitados de utilizar essa funcionalidade.

## Evidência

Adicionar captura do erro apresentado no console.