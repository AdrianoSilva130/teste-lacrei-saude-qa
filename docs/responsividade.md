# Testes de Responsividade

## Objetivo

Validar o comportamento da aplicação em diferentes tamanhos de tela, garantindo que o layout, as funcionalidades e a usabilidade permaneçam adequados em dispositivos móveis e desktops.

## Cenários de Teste

### RR-001 – Validação em dispositivo Mobile (até 600px)

**Ambiente:**
- Resolução testada: 390px x 844px
- Ferramenta: Chrome DevTools (modo responsivo)

**Itens validados:**

| Item | Resultado |
|---|---|
| Layout se adapta ao tamanho da tela | ✅ Passou |
| Elementos não ficam cortados ou sobrepostos | ✅ Passou |
| Menus e botões permanecem acessíveis | ✅ Passou |
| Campos e formulários funcionam corretamente | ✅ Passou (sem validação do teclado virtual) |
| Navegação mantém boa usabilidade | ✅ Passou |


**Resultado:**

✅ Aprovado

A aplicação apresentou comportamento adequado em resolução mobile (390x844), mantendo layout, funcionalidades e usabilidade preservados.

### RR-002 – Validação em dispositivo Desktop (>1024px)

**Ambiente:**
- Resolução testada: 1366px x 768px
- Ferramenta: Chrome DevTools (modo responsivo)

**Itens validados:**

| Item | Resultado |
|---|---|
| Layout se adapta ao tamanho da tela | ⚠️ Parcial |
| Elementos não ficam cortados ou sobrepostos | ❌ Falhou |
| Menus e botões permanecem acessíveis | ❌ Falhou |
| Campos e formulários funcionam corretamente | ✅ Passou |
| Navegação mantém boa usabilidade | ✅ Passou |

**Observação:**
Foi identificado que o cabeçalho apresenta um leve desalinhamento horizontal em resolução desktop, com maior espaço em branco nas laterais. Recomenda-se revisar o comportamento do container do cabeçalho em telas maiores.

**Observação:**
Foi identificado que, na resolução desktop (1366x768), seções que possuem texto e imagem apresentam sobreposição parcial do conteúdo. O problema ocorre nas áreas "O que é a Lacrei Saúde" e "Missão, Visão e Valores", prejudicando a visualização das informações.

**Observação:**
O botão de acessibilidade VLibras está visível e permite o clique, porém o recurso não é carregado. Foi identificado erro no console relacionado ao carregamento do script do VLibras devido ao MIME type incompatível.

**Resultado:**
⚠️ Parcial

A aplicação apresentou bom funcionamento geral em resolução desktop, porém foram identificados problemas de responsividade relacionados à sobreposição de textos com imagens e falha no carregamento do recurso VLibras.