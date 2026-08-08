# BUG-004 — Cadastro aceita e-mail com domínio inexistente

## Descrição
O sistema permite realizar o cadastro utilizando um endereço de e-mail com formato aparentemente válido, porém com um domínio inexistente.

## Passos para reprodução
1. Acessar a página de cadastro.
2. Informar nome e sobrenome válidos.
3. Informar o e-mail `adrianosilva13@ail.com`.
4. Confirmar o mesmo e-mail no campo de confirmação.
5. Informar uma senha que atenda a todos os requisitos.
6. Confirmar a senha.
7. Aceitar os Termos de Uso e a Política de Privacidade.
8. Confirmar que possui 18 anos ou mais.
9. Clicar em cadastrar.

## Resultado esperado
O sistema deveria validar a existência ou a possibilidade de recebimento do e-mail informado antes de concluir o cadastro ou utilizar um mecanismo de confirmação que impeça a criação de uma conta não verificável.

## Resultado atual
O cadastro é concluído e o sistema informa que um link de confirmação foi enviado para o e-mail informado, mesmo utilizando um domínio inexistente.

## Impacto
Médio

## Prioridade
Média

## Categoria
Funcionalidade / Validação de dados

## Evidência
![Email sem domínio](./bug-cadastro-sem-domínio.mp4)