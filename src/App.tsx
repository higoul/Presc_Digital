import React, { useState, useCallback, useMemo, FC, lazy, Suspense, useRef } from 'react';
import { CONDITIONS } from '../data/conditions';
import { Condition } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { EmptyState } from './components/common/EmptyState';
import { KeyboardHelp } from './components/common/KeyboardHelp';
import { useSearch } from './hooks/useSearch';
import { useSidebar } from './hooks/useSidebar';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useDarkMode } from './hooks/useDarkMode';

// Lazy loading de componentes pesados
const ConditionDetail = lazy(() => import('./components/condition/ConditionDetail').then(module => ({ default: module.ConditionDetail })));
const Glossary = lazy(() => import('./components/glossary/Glossary').then(module => ({ default: module.Glossary })));

type View = 'home' | 'glossary';

const App: FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);

  const { searchQuery, setSearchQuery, selectedSpecialty, setSelectedSpecialty, filteredConditions } = useSearch(CONDITIONS);
  const sidebar = useSidebar(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { isDark, toggle: toggleDarkMode } = useDarkMode();

  const handleSelectCondition = useCallback((condition: Condition) => {
    setSelectedCondition(condition);
    setCurrentView('home');
  }, []);

  const handleSelectGlossary = useCallback(() => {
    setCurrentView('glossary');
    setSelectedCondition(null);
  }, []);

  const headerTitle = useMemo(() => {
    if (currentView === 'glossary') return 'Glossário';
    if (selectedCondition) return selectedCondition.title;
    return 'Prescrição Fácil Digital';
  }, [currentView, selectedCondition]);

  const headerSubtitle = useMemo(() => {
    if (selectedCondition && currentView === 'home') {
      return `CID: ${selectedCondition.cid}`;
    }
    return undefined;
  }, [selectedCondition, currentView]);

  // Atalhos de teclado
  useKeyboardShortcuts([
    {
      key: 'k',
      ctrl: true,
      handler: () => {
        searchInputRef.current?.focus();
        if (!sidebar.isOpen) sidebar.open();
      },
      description: 'Focar no campo de busca',
    },
    {
      key: 'b',
      ctrl: true,
      handler: sidebar.toggle,
      description: 'Abrir/fechar menu lateral',
    },
    {
      key: 'Escape',
      handler: () => {
        if (sidebar.isOpen) sidebar.close();
        if (showKeyboardHelp) setShowKeyboardHelp(false);
      },
      description: 'Fechar menu ou modal',
    },
    {
      key: 'g',
      ctrl: true,
      handler: handleSelectGlossary,
      description: 'Abrir glossário',
    },
    {
      key: '?',
      ctrl: true,
      handler: () => setShowKeyboardHelp(prev => !prev),
      description: 'Mostrar atalhos de teclado',
    },
  ]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Skip Links para acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Pular para conteúdo principal
      </a>
      <a
        href="#sidebar-search"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Pular para busca
      </a>

      {/* Live region para anúncios do screen reader */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {selectedCondition && `Condição selecionada: ${selectedCondition.title}`}
        {filteredConditions.length > 0 && `${filteredConditions.length} condições encontradas`}
      </div>

      <Sidebar
        isOpen={sidebar.isOpen}
        onClose={sidebar.close}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedSpecialty={selectedSpecialty}
        onSpecialtyChange={setSelectedSpecialty}
        filteredConditions={filteredConditions}
        selectedCondition={selectedCondition}
        onSelectCondition={handleSelectCondition}
        onSelectGlossary={handleSelectGlossary}
        isGlossaryActive={currentView === 'glossary'}
        searchInputRef={searchInputRef}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          sidebarOpen={sidebar.isOpen}
          onToggleSidebar={sidebar.open}
          title={headerTitle}
          subtitle={headerSubtitle}
          isDark={isDark}
          onToggleDarkMode={toggleDarkMode}
        />

        <div id="main-content" className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900" tabIndex={-1}>
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 dark:border-blue-400 mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando...</p>
              </div>
            </div>
          }>
            {currentView === 'glossary' ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <Glossary onBack={() => setCurrentView('home')} />
              </div>
            ) : selectedCondition ? (
              <ConditionDetail condition={selectedCondition} />
            ) : (
              <EmptyState
                title="Bem-vindo ao Guia de Condutas"
                description="Selecione uma condição no menu lateral para começar"
              />
            )}
          </Suspense>
        </div>
      </main>

      <KeyboardHelp isOpen={showKeyboardHelp} onClose={() => setShowKeyboardHelp(false)} />
    </div>
  );
};

export default App;
