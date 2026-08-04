# CT-002 — Cadastro de pessoa usuária

## Objetivo

Validar o fluxo de cadastro de uma nova pessoa usuária, verificando as validações dos campos obrigatórios e as regras de senha, confirmação de e-mail, aceite dos termos e confirmação de maioridade.

## Regras de validação observadas

### E-mail
- O e-mail deve ser informado.
- O e-mail deve ser confirmado.
- O formato do e-mail deve ser válido.

### Senha
A senha deve possuir:
- No mínimo 8 caracteres;
- Pelo menos 1 letra maiúscula;
- Pelo menos 1 letra minúscula;
- Pelo menos 1 número;
- Pelo menos 1 caractere especial, como `#!*-_&`.

### Confirmação de senha
- A senha de confirmação deve ser idêntica à senha informada anteriormente.

### Termos e Política de Privacidade
A pessoa usuária deve marcar a opção:
> Li e concordo com os Termos de Uso e Política de Privacidade.

### Maioridade
A pessoa usuária deve confirmar:
> Tenho 18 anos ou mais.

### Botão Cadastrar
- O botão permanece cinza enquanto os requisitos obrigatórios não são atendidos.
- O botão fica verde e clicável quando todos os requisitos são preenchidos corretamente.

## Validações realizadas

- E-mail sem `@` não permite realizar o cadastro.
- Senha sem algum dos requisitos obrigatórios não permite realizar o cadastro.
- Senhas diferentes não permitem realizar o cadastro.
- Não aceitar os Termos de Uso e a Política de Privacidade impede o cadastro.
- Não confirmar que possui 18 anos ou mais impede o cadastro.
- O cadastro foi permitido utilizando um domínio de e-mail inexistente. **BUG-004**.
- O link dos Termos de Uso direciona corretamente para a página correspondente.
- O botão Ajuda direciona corretamente para a página de ajuda.
- O logo Lacrei Saúde direciona corretamente para a página inicial.
- O texto clicável "Lacrei Saúde" direciona corretamente para a página inicial.
- O link "Pessoas Profissionais" direciona corretamente para a área destinada aos profissionais.
- O link Política de Privacidade direciona corretamente para a página correspondente.
- O link Termos de Uso direciona corretamente para a página correspondente.
- Os links das redes sociais Facebook, Instagram, LinkedIn e e-mail direcionam corretamente para seus respectivos destinos.
- O botão de Libras abre corretamente o recurso de acessibilidade.
- O botão de seta para cima retorna corretamente ao início da página.

## Resultado

O fluxo de cadastro e suas validações foram executados manualmente.

A maioria das validações apresentou o comportamento esperado. Foi identificado um problema relacionado à aceitação de endereço de e-mail com domínio inexistente, registrado como BUG-004.

## Status

PASSOU COM RESSALVA