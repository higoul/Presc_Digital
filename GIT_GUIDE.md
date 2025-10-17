# 🔄 Guia de Versionamento e Restauração

## 📍 Ponto de Restauração Criado

**Tag**: `v1.0-baseline`
**Commit**: `5432f35`
**Data**: 2025-10-17
**Descrição**: Estado inicial do projeto com menu lateral SPA implementado

---

## 🔙 Como Restaurar para um Ponto Anterior

### Opção 1: Restaurar Temporariamente (apenas visualizar)
```bash
# Ver o código como estava no ponto de restauração
git checkout v1.0-baseline

# Para voltar ao estado atual depois
git checkout master
```

### Opção 2: Desfazer Últimas Mudanças (mantém histórico)
```bash
# Desfazer o último commit, mantendo as alterações nos arquivos
git reset --soft HEAD~1

# Desfazer o último commit, descartando as alterações
git reset --hard HEAD~1

# Desfazer múltiplos commits (ex: últimos 3)
git reset --hard HEAD~3
```

### Opção 3: Voltar Completamente ao Ponto de Restauração
```bash
# CUIDADO: Isso apaga TODOS os commits após v1.0-baseline
git reset --hard v1.0-baseline

# Se quiser manter um backup antes
git branch backup-antes-restauracao
git reset --hard v1.0-baseline
```

### Opção 4: Criar Branch para Experimentar
```bash
# Melhor prática: criar branch antes de fazer mudanças grandes
git checkout -b feature/melhorias-performance
# Faça suas alterações...
# Se der errado:
git checkout master
git branch -D feature/melhorias-performance
```

---

## 🌿 Workflow Recomendado para Implementar Melhorias

### 1. Criar Branch para Cada Melhoria
```bash
# Exemplo: Implementar componentização
git checkout -b refactor/componentizacao
# Faça as alterações...
git add .
git commit -m "refactor: separar App.tsx em componentes menores"

# Se deu certo, mesclar com master
git checkout master
git merge refactor/componentizacao

# Se deu errado, descartar
git checkout master
git branch -D refactor/componentizacao
```

### 2. Commitar Pequenas Mudanças Frequentemente
```bash
# Em vez de um grande commit, vários pequenos
git add src/components/Sidebar.tsx
git commit -m "feat: criar componente Sidebar"

git add src/components/Header.tsx
git commit -m "feat: criar componente Header"

git add App.tsx
git commit -m "refactor: usar novos componentes no App"
```

### 3. Criar Tags para Marcos Importantes
```bash
# Após completar uma grande melhoria
git tag -a v1.1-componentizacao -m "Componentes separados e organizados"

# Após implementar testes
git tag -a v1.2-testes -m "Cobertura de testes implementada"
```

---

## 📋 Comandos Úteis

### Ver Histórico
```bash
# Ver todos os commits
git log --oneline --graph --all

# Ver apenas tags
git tag -l

# Ver detalhes de um commit específico
git show 5432f35
```

### Comparar Versões
```bash
# Ver diferenças entre agora e o ponto de restauração
git diff v1.0-baseline

# Ver diferenças entre dois commits
git diff 5432f35 HEAD

# Ver apenas arquivos modificados
git diff --name-only v1.0-baseline
```

### Salvar Trabalho Temporariamente
```bash
# Guardar mudanças não commitadas
git stash save "trabalho em progresso"

# Listar stashes
git stash list

# Recuperar último stash
git stash pop

# Recuperar stash específico
git stash apply stash@{0}
```

### Desfazer Mudanças em Arquivo Específico
```bash
# Restaurar um arquivo para como estava no último commit
git checkout HEAD -- App.tsx

# Restaurar um arquivo para como estava na baseline
git checkout v1.0-baseline -- App.tsx
```

---

## 🚨 Em Caso de Emergência

### Tudo Deu Errado! Quero Voltar!
```bash
# 1. Criar backup do estado atual (por precaução)
git branch backup-emergencia

# 2. Ver todos os commits para encontrar onde estava bom
git log --oneline

# 3. Voltar para o commit que estava funcionando
git reset --hard <commit-hash>
# Ou voltar para a baseline original
git reset --hard v1.0-baseline
```

### Recuperar Commits "Perdidos"
```bash
# Git mantém histórico de TUDO por 30 dias
git reflog

# Você verá algo como:
# 5432f35 HEAD@{0}: commit: chore: ponto de restauração inicial
# a1b2c3d HEAD@{1}: commit: alguma mudança anterior

# Para voltar para qualquer ponto
git reset --hard HEAD@{1}
```

---

## 🎯 Plano de Implementação Segura das Melhorias

### Fase 1: Segurança e Setup (Branch: `fix/security`)
- [x] Adicionar .env* ao .gitignore
- [ ] Criar .env.example
- [ ] Configurar ESLint e Prettier

### Fase 2: Componentização (Branch: `refactor/components`)
- [ ] Extrair Sidebar.tsx
- [ ] Extrair Header.tsx
- [ ] Extrair ConditionList.tsx
- [ ] Extrair ConditionDetail.tsx

### Fase 3: Performance (Branch: `perf/optimization`)
- [ ] Adicionar React.memo
- [ ] Implementar virtualização
- [ ] Code splitting com lazy loading

### Fase 4: Acessibilidade (Branch: `feat/a11y`)
- [ ] ARIA labels
- [ ] Navegação por teclado
- [ ] Screen reader support

### Fase 5: Testes (Branch: `test/setup`)
- [ ] Configurar Vitest
- [ ] Testes de componentes
- [ ] Testes de hooks

---

## 📝 Convenção de Commits

Use commits semânticos para melhor organização:

```bash
feat: nova funcionalidade
fix: correção de bug
refactor: refatoração de código
perf: melhoria de performance
test: adição de testes
docs: documentação
style: formatação de código
chore: tarefas de manutenção
```

**Exemplos:**
```bash
git commit -m "feat: adicionar favoritos com localStorage"
git commit -m "fix: corrigir bug de busca case-sensitive"
git commit -m "perf: adicionar memoização em ConditionCard"
git commit -m "refactor: separar App.tsx em componentes"
```

---

## ✅ Checklist Antes de Cada Commit

- [ ] Código compila sem erros (`npm run build`)
- [ ] Testes passam (`npm run test`)
- [ ] Sem console.logs desnecessários
- [ ] Código formatado (`prettier`)
- [ ] Commit message descritivo

---

## 🆘 Precisa de Ajuda?

```bash
# Ver status atual
git status

# Ver diferenças não commitadas
git diff

# Ver últimos commits
git log --oneline -10

# Ver todas as branches
git branch -a
```

**Lembre-se:** Git guarda tudo! É quase impossível perder código permanentemente se você commitou pelo menos uma vez. Use `git reflog` em casos extremos.
