import React, { useState, FC } from 'react';
import { CONDITIONS } from '../data/conditions';
import { Condition } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { ConditionDetail } from './components/condition/ConditionDetail';
import { Glossary } from './components/glossary/Glossary';
import { EmptyState } from './components/common/EmptyState';
import { useSearch } from './hooks/useSearch';
import { useSidebar } from './hooks/useSidebar';

type View = 'home' | 'glossary';

const App: FC = () => {
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');

  const { searchQuery, setSearchQuery, filteredConditions } = useSearch(CONDITIONS);
  const sidebar = useSidebar(true);

  const handleSelectCondition = (condition: Condition) => {
    setSelectedCondition(condition);
    setCurrentView('home');
  };

  const handleSelectGlossary = () => {
    setCurrentView('glossary');
    setSelectedCondition(null);
  };

  const getHeaderTitle = () => {
    if (currentView === 'glossary') return 'Glossário';
    if (selectedCondition) return selectedCondition.title;
    return 'Prescrição Fácil Digital';
  };

  const getHeaderSubtitle = () => {
    if (selectedCondition && currentView === 'home') {
      return `CID: ${selectedCondition.cid}`;
    }
    return undefined;
  };

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
          title={getHeaderTitle()}
          subtitle={getHeaderSubtitle()}
        />

        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
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
        </div>
      </main>
    </div>
  );
};

export default App;
