import React, { useState, useCallback, useMemo, FC, lazy, Suspense } from 'react';
import { CONDITIONS } from '../data/conditions';
import { Condition } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { EmptyState } from './components/common/EmptyState';
import { useSearch } from './hooks/useSearch';
import { useSidebar } from './hooks/useSidebar';

// Lazy loading de componentes pesados
const ConditionDetail = lazy(() => import('./components/condition/ConditionDetail').then(module => ({ default: module.ConditionDetail })));
const Glossary = lazy(() => import('./components/glossary/Glossary').then(module => ({ default: module.Glossary })));

type View = 'home' | 'glossary';

const App: FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');

  const { searchQuery, setSearchQuery, filteredConditions } = useSearch(CONDITIONS);
  const sidebar = useSidebar(true);

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

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        isOpen={sidebar.isOpen}
        onClose={sidebar.close}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filteredConditions={filteredConditions}
        selectedCondition={selectedCondition}
        onSelectCondition={handleSelectCondition}
        onSelectGlossary={handleSelectGlossary}
        isGlossaryActive={currentView === 'glossary'}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          sidebarOpen={sidebar.isOpen}
          onToggleSidebar={sidebar.open}
          title={headerTitle}
          subtitle={headerSubtitle}
        />

        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Carregando...</p>
              </div>
            </div>
          }>
            {currentView === 'glossary' ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
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
    </div>
  );
};

export default App;
