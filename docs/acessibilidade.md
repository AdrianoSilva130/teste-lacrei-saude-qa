# Testes de Acessibilidade

## Objetivo

Validar a acessibilidade da aplicação por meio de testes automatizados e manuais, verificando navegação por teclado, compatibilidade com tecnologias assistivas e conformidade com boas práticas de acessibilidade.

## Resultado do Lighthouse

- Ferramenta utilizada: Google Lighthouse (Chrome DevTools)
- Data da execução: 07/08/2026
- Pontuação de Acessibilidade: **96/100**

### Principal oportunidade de melhoria

- O Lighthouse identificou uso de atributo **ARIA proibido** no link da **Logo da Lacrei Saúde**, o que pode prejudicar a experiência de usuários de leitores de tela.

**Elemento identificado:**

```html
<a aria-label="Logo da Lacrei Saúde" ...>
```

## Bugs encontrados

### BUG-AC-001 – Navegação por teclado não alcança "Perfil" e "Logout"

**Categoria:** Acessibilidade

**Severidade:** Média

**Pré-condição:**
Usuário autenticado na aplicação.

**Passos para reproduzir:**
1. Fazer login na aplicação.
2. Navegar utilizando apenas a tecla **Tab**.
3. Percorrer todos os elementos da interface até a área do usuário.

**Resultado esperado:**
Os elementos **Perfil** e **Logout** devem receber foco e ser acessíveis por meio da tecla **Tab**, permitindo sua utilização sem o uso do mouse.

**Resultado obtido:**
A navegação por teclado ignora os elementos **Perfil** e **Logout**, impossibilitando o acesso a essas funcionalidades utilizando apenas o teclado.

**Impacto:**
Usuários que dependem exclusivamente do teclado ou de tecnologias assistivas não conseguem acessar essas opções.

**Evidência:**

![Navegação por teclado - Perfil e Logout](../evidencias/bugs/bug-acessibilidade-tab.gif)

## Conclusão

Os testes de acessibilidade foram realizados utilizando o Google Lighthouse e validações manuais de navegação por teclado.

A aplicação obteve **96/100** na avaliação de acessibilidade do Lighthouse, indicando boa conformidade com as boas práticas de acessibilidade.

Durante os testes, foi identificada uma oportunidade de melhoria relacionada ao uso de atributos ARIA e um problema de navegação por teclado, em que os elementos **Perfil** e **Logout** não recebem foco ao utilizar a tecla **Tab**, dificultando o acesso para usuários que dependem exclusivamente do teclado.

De forma geral, a aplicação apresenta um bom nível de acessibilidade, mas as melhorias identificadas contribuem para tornar a experiência mais inclusiva e aderente às recomendações de acessibilidade.

