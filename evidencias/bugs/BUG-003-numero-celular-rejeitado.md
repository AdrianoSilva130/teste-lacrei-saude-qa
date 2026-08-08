# BUG-003 — Número de celular válido é rejeitado ao solicitar código de confirmação

## Descrição
Ao tentar realizar um agendamento com um profissional, o sistema solicita um número de celular para envio de um código de confirmação. Mesmo após informar um número de celular válido, o sistema informa que o número está incorreto e impede o prosseguimento do fluxo.

## Passos para reprodução
1. Acessar a plataforma Lacrei Saúde.
2. Realizar login na plataforma.
3. Acessar a busca de profissionais.
4. Pesquisar um profissional.
5. Acessar o perfil do profissional.
6. Acessar a opção de agendamento.
7. Informar um número de celular válido.
8. Verificar que o campo indica visualmente que o número está no formato correto.
9. Clicar em "Enviar código".

## Resultado esperado
O sistema deve aceitar o número de celular válido e enviar um código de confirmação para o número informado, permitindo que a pessoa usuária prossiga com o agendamento.

## Resultado atual
O sistema indica visualmente que o número informado está no formato correto, porém, ao clicar em "Enviar código", apresenta a mensagem:

> "Número de celular incorreto. Digite novamente."

O fluxo de agendamento não pode ser concluído.

## Impacto
Alto

## Prioridade
Alta

## Categoria
Funcionalidade / Agendamento

## Status
Bloqueado

## Evidência
Adicionar print ou vídeo demonstrando:
- Número de celular informado;
- Indicador visual de formato válido;
- Mensagem de erro apresentada após clicar em "Enviar código".

![Mensagem de erro com telefone correto](./bug-celular.gif)