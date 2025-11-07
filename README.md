<div align="center">
  <h1>💊 Prescrição Fácil Digital</h1>
  <p>Guia rápido de protocolos e prescrições médicas para pronto-atendimento</p>
  
  <p>
    <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg" />
    <img alt="License" src="https://img.shields.io/badge/license-MIT-green.svg" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.8-blue.svg" />
    <img alt="React" src="https://img.shields.io/badge/React-19.2-blue.svg" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-6.2-purple.svg" />
  </p>
</div>

---

## 📋 Sobre o Projeto

**Prescrição Fácil Digital** é uma aplicação web moderna desenvolvida para facilitar o acesso rápido a protocolos e prescrições práticas no pronto-atendimento. Baseada no guia "Prescrição Fácil - PS Adulto", oferece informações sobre **93+ condições médicas** organizadas por especialidade.

### ✨ Funcionalidades Principais

- 🔍 **Busca Inteligente**: Pesquise condições por nome ou código CID
- 🏥 **Filtro por Especialidade**: 16 especialidades médicas diferentes
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🌙 **Modo Escuro**: Interface adaptada para diferentes preferências
- ⌨️ **Atalhos de Teclado**: Navegação rápida e eficiente
- 📚 **Glossário Médico**: Termos, abreviações e classes de medicamentos
- ♿ **Acessibilidade**: Suporte completo a leitores de tela e navegação por teclado
- 📱 **PWA**: Instalável como aplicativo mobile
- 🚀 **Performance Otimizada**: CSS minificado, lazy loading e code splitting

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 18+ (recomendado: 20+)
- **npm** ou **yarn** ou **pnpm**

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/prescricao-facil-digital.git
   cd prescricao-facil-digital
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador em: `http://localhost:3000`

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Cria build de produção
npm run preview      # Preview do build de produção
```

---

## 📁 Estrutura do Projeto

```
prescrição-fácil-digital/
├── data/                    # Dados estáticos
│   ├── conditions.ts        # 93+ condições médicas
│   └── glossary.ts          # Termos médicos e abreviações
├── src/
│   ├── components/          # Componentes React
│   │   ├── common/          # Componentes reutilizáveis
│   │   ├── condition/       # Componentes de condições
│   │   ├── glossary/        # Componente de glossário
│   │   └── layout/          # Layout (Header, Sidebar)
│   ├── hooks/               # Hooks customizados
│   │   ├── useDarkMode.ts
│   │   ├── useSearch.ts
│   │   ├── useSidebar.ts
│   │   └── useKeyboardShortcuts.ts
│   ├── utils/               # Utilitários
│   │   └── specialtyMapping.ts
│   ├── types.ts             # Definições TypeScript
│   ├── App.tsx              # Componente principal
│   └── index.css            # Estilos globais
├── public/                  # Arquivos estáticos
├── dist/                    # Build de produção
├── index.html               # HTML principal
├── index.tsx                # Ponto de entrada
├── tailwind.config.js       # Configuração Tailwind
├── vite.config.ts           # Configuração Vite
└── package.json             # Dependências
```

---

## 🎯 Funcionalidades Detalhadas

### Busca e Filtros

- **Busca por texto**: Pesquise pelo nome da condição ou código CID
- **Filtro por especialidade**: Filtre por uma das 16 especialidades disponíveis
- **Busca combinada**: Use busca e filtro simultaneamente

### Visualização de Condições

Cada condição médica inclui:
- 📋 **Diagnóstico Diferencial**
- ⚠️ **Conduta Inicial**
- 🏥 **Tratamento Não Farmacológico**
- 💊 **Opções Farmacológicas** (SUS e não-SUS)
- 🩺 **Procedimentos na Unidade**
- 📝 **Orientações ao Paciente**

### Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `Ctrl + K` | Focar no campo de busca |
| `Ctrl + B` | Abrir/fechar menu lateral |
| `Ctrl + G` | Abrir glossário |
| `Ctrl + ?` | Mostrar ajuda de atalhos |
| `Escape` | Fechar menu ou modal |

### Especialidades Disponíveis

- Clínica Geral
- Dermatologia
- Otorrinolaringologia
- Gastroenterologia
- Infectologia/DSTs
- Pneumologia
- Cardiologia
- Neurologia
- Ginecologia/Obstetrícia
- Urologia
- Oftalmologia
- Reumatologia/Ortopedia
- Parasitologia
- Alergias e Imunologia
- Psiquiatria
- Hematologia

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React 19.2** - Biblioteca UI
- **TypeScript 5.8** - Tipagem estática
- **Vite 6.2** - Build tool e dev server

### Estilização
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Compatibilidade de browsers

### Ferramentas
- **ESLint** - Linting de código (planejado)
- **Prettier** - Formatação de código (planejado)
- **Vitest** - Framework de testes (planejado)

---

## 🎨 Design e UX

### Características de Design
- Interface limpa e moderna
- Cores suaves e profissionais
- Tipografia legível (Inter, Lato, Roboto)
- Transições suaves
- Feedback visual adequado

### Acessibilidade
- ✅ Suporte a leitores de tela (ARIA labels)
- ✅ Navegação completa por teclado
- ✅ Skip links para navegação rápida
- ✅ Contraste adequado de cores
- ✅ Foco visível em elementos interativos

### Responsividade
- 📱 Mobile-first design
- 💻 Layout adaptativo para tablets
- 🖥️ Otimizado para desktop
- 📐 Breakpoints: sm, md, lg, xl

---

## 📱 PWA (Progressive Web App)

O aplicativo pode ser instalado como PWA:

### Instalação no Desktop
- Chrome/Edge: Clique no ícone de instalação na barra de endereços
- Firefox: Menu → Instalar Site como App

### Instalação no Mobile
- **Android**: Menu → "Adicionar à tela inicial"
- **iOS**: Safari → Compartilhar → "Adicionar à Tela de Início"

### Funcionalidades PWA
- ✅ Funciona offline (com Service Worker)
- ✅ Ícones customizados
- ✅ Tema personalizado
- ✅ Splash screen

---

## 🧪 Testes

> ⚠️ Testes estão planejados para implementação futura

### Estrutura Planejada
```
tests/
├── components/      # Testes de componentes
├── hooks/          # Testes de hooks
└── utils/          # Testes de utilitários
```

---

## 📈 Performance

### Métricas de Build
- **CSS**: 18.55 KB (4.08 KB gzipped)
- **JavaScript**: 373.62 KB (111.97 KB gzipped)
- **HTML**: 2.23 KB (0.95 KB gzipped)

### Otimizações Implementadas
- ✅ Tailwind CSS otimizado (apenas classes usadas)
- ✅ Lazy loading de componentes
- ✅ Code splitting
- ✅ Minificação de assets
- ✅ Gzip compression

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Convenção de Commits
Usamos commits semânticos:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `refactor:` Refatoração
- `docs:` Documentação
- `style:` Formatação
- `test:` Testes
- `chore:` Manutenção

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 🙏 Agradecimentos

- Baseado no guia "Prescrição Fácil - PS Adulto"
- Comunidade React e TypeScript
- Mantenedores das bibliotecas open source utilizadas

---

## 📞 Contato

Para dúvidas, sugestões ou problemas:
- 📧 Email: [seu-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/prescricao-facil-digital/issues)
- 💬 Discussões: [GitHub Discussions](https://github.com/seu-usuario/prescricao-facil-digital/discussions)

---

## 🗺️ Roadmap

Veja o arquivo [NEXT_STEPS.md](NEXT_STEPS.md) para o roadmap completo de melhorias planejadas.

### Próximas Features
- [ ] Sistema de testes automatizados
- [ ] ESLint e Prettier configurados
- [ ] Otimização de performance dos dados
- [ ] Melhorias de SEO
- [ ] Validação de dados com Zod
- [ ] Mais melhorias de UX

---

<div align="center">
  <p>Feito com ❤️ para facilitar o trabalho dos profissionais de saúde</p>
  <p>⭐ Se este projeto foi útil, considere dar uma estrela!</p>
</div>
