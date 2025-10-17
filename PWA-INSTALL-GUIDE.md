# 📱 Guia de Instalação do PWA - Prescrição Fácil Digital

## 🎯 Prompt Automático de Instalação

O app agora mostra automaticamente um **prompt de instalação** quando acessado pela primeira vez!

## Como Funciona

### **Comportamento Automático:**

1. **Primeira visita**: Após 3 segundos, aparece um banner na parte inferior da tela
2. **Banner exibe**:
   - Ícone do app 📱
   - Título: "Instalar Prescrição Fácil"
   - Descrição: "Adicione à tela inicial para acesso rápido e uso offline"
   - Botões: **Instalar** / **Agora não** / **X** (fechar)

3. **Interação do usuário**:
   - ✅ Se clicar "**Instalar**": Abre o prompt nativo do navegador → App é instalado → Não pergunta mais
   - ❌ Se clicar "**Agora não**" ou **X**: Prompt fecha → **Nunca mais aparece** (respeitando a escolha)

### **Persistência:**
- Usa `localStorage` para lembrar da escolha
- **1 chance por dispositivo** (não é invasivo)
- Se limpar dados do navegador, volta a aparecer

## 📲 Compatibilidade

### ✅ **Suportado (mostra o prompt):**
- **Android**: Chrome, Edge, Samsung Internet, Firefox
- **Desktop**: Chrome, Edge (Windows/Mac/Linux)

### ❌ **Não suportado (não mostra prompt):**
- **iOS/iPadOS**: Safari (Apple não permite API beforeinstallprompt)
  - Usuários iOS precisam instalar manualmente:
    1. Safari → Compartilhar (□↑)
    2. "Adicionar à Tela de Início"

### **Alternativa iOS:**
O app ainda é instalável no iOS, mas o usuário precisa fazer manualmente (Apple não permite prompts automáticos).

## 🧪 Como Testar

### **Android (Chrome):**
1. Acesse **presc-digital.vercel.app**
2. Aguarde 3 segundos
3. ✨ **Banner de instalação aparece!**
4. Toque em "Instalar"
5. Confirme no prompt do Chrome
6. App instalado! 🎉

### **Desktop (Chrome/Edge):**
1. Acesse **presc-digital.vercel.app**
2. Aguarde 3 segundos
3. ✨ **Banner de instalação aparece!**
4. Clique em "Instalar"
5. Confirme
6. App aparece como atalho!

### **Testar Novamente (Debug):**
Se quiser testar o prompt novamente:

1. **Console do navegador** (F12):
   ```javascript
   localStorage.removeItem('pwa-install-prompt-interaction')
   ```
2. Recarregue a página
3. Prompt aparece novamente!

## 🎨 Design do Prompt

```
┌──────────────────────────────────────┐
│ 📱  Instalar Prescrição Fácil    ✕  │
│                                      │
│     Adicione à tela inicial para     │
│     acesso rápido e uso offline      │
│                                      │
│  ┌─────────┐  ┌──────────┐          │
│  │ Instalar │  │ Agora não│          │
│  └─────────┘  └──────────┘          │
└──────────────────────────────────────┘
```

- Fundo branco (claro) / cinza escuro (dark mode)
- Borda azul destacada
- Animação suave de entrada (slide-up)
- Botão primário azul em destaque
- Responsivo (adapta a telas pequenas)

## 📊 Estatísticas (para referência)

Segundo estudos:
- Prompts automáticos aumentam instalações em **até 5x**
- Timing ideal: **3-5 segundos** após carregamento
- Taxa de conversão: **~8-15%** (usuários que instalam)
- Importante: **Não ser invasivo** (mostrar apenas 1 vez)

## 🚀 Benefícios para o Usuário

Após instalar:
- ✅ Ícone na tela inicial (acesso com 1 toque)
- ✅ Abre em tela cheia (sem barra de navegação)
- ✅ Funciona offline (cache básico)
- ✅ Notificações push (futuro, se implementado)
- ✅ Experiência de app nativo

## 🔧 Configurações Técnicas

- **Evento**: `beforeinstallprompt`
- **Storage**: `localStorage.pwa-install-prompt-interaction`
- **Timing**: 3000ms (3 segundos)
- **Componente**: `src/components/common/InstallPrompt.tsx`
- **Z-index**: 50 (sempre visível)

## 📝 Notas Importantes

1. **Desktop**: O prompt só aparece se o site for acessado via HTTPS (✅ Vercel já usa HTTPS)
2. **iOS**: Não há suporte nativo, mas o app é instalável manualmente
3. **Teste Local**: Em `localhost`, o evento `beforeinstallprompt` pode não disparar (teste no Vercel)
4. **Service Worker**: Necessário estar registrado (✅ já implementado)

## 🎯 Objetivo Alcançado

✅ App pergunta automaticamente se quer instalar
✅ Mostra apenas 1 vez (não é invasivo)
✅ Respeita a escolha do usuário (não pergunta de novo se recusar)
✅ Design profissional e acessível
✅ Funciona em Android e Desktop (Chrome/Edge)
