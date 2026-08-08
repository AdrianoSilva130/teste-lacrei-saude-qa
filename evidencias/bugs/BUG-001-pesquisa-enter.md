# BUG-001 — Pesquisa de profissionais não funciona com a tecla Enter

## Descrição
A pesquisa de profissionais não é executada quando a pessoa usuária utiliza a tecla Enter para realizar a busca.

## Passos para reprodução
1. Acessar a plataforma Lacrei Saúde.
2. Acessar a funcionalidade de busca de profissionais.
3. Informar um termo válido no campo de pesquisa (Como médico em são paulo).
4. Pressionar a tecla Enter.
5. Utilizar a tecla Tab até o botão de pesquisa.
6. Pressionar Enter novamente.

## Resultado esperado
A pesquisa deve ser executada ao pressionar Enter, permitindo que a pessoa usuária realize a busca utilizando o teclado.

## Resultado atual
A pesquisa não é executada utilizando a tecla Enter. A busca somente é realizada quando o botão de pesquisa é acionado com o mouse.

## Impacto
Médio

## Prioridade
Média

## Categoria
Funcionalidade / Usabilidade / Acessibilidade

## Evidência
![Clicar duas vezes no enter para fazer a pesquisa](./bug-click-duas-vezes.gif)