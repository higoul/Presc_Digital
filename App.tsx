import React, { useState, useMemo, FC, ReactNode } from 'react';
import { CONDITIONS } from './data/conditions';
import { Condition, TreatmentBlock } from './types';
import { SearchIcon, BookOpenIcon, WarningIcon, BalanceIcon, GlossaryIcon } from './constants';
import { Glossary } from './Glossary';

type View = 'home' | 'glossary';

const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [currentView, setCurrentView] = useState<View>('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredConditions = useMemo(() => {
    if (!searchQuery.trim()) {
      return CONDITIONS;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return CONDITIONS.filter(condition =>
      condition.title.toLowerCase().includes(lowercasedQuery) ||
      condition.cid.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery]);

  const handleSelectCondition = (condition: Condition) => {
    setSelectedCondition(condition);
    setCurrentView('home');
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-80' : 'w-0'
        } bg-white shadow-lg transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center text-blue-600">
            <BookOpenIcon />
            <h1 className="text-xl font-bold ml-2">Guia de Condutas</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar condição ou CID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <button
              onClick={() => {
                setCurrentView('glossary');
                setSelectedCondition(null);
              }}
              className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
                currentView === 'glossary'
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <GlossaryIcon />
              <span className="ml-2">Glossário</span>
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">Condições</h3>
            {filteredConditions.length > 0 ? (
              <ul className="space-y-1">
                {filteredConditions.map(condition => (
                  <li key={condition.id}>
                    <button
                      onClick={() => handleSelectCondition(condition)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCondition?.id === condition.id
                          ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-500'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="font-medium text-sm">{condition.title}</div>
                      <div className="text-xs text-gray-500 mt-1">CID: {condition.cid}</div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 px-2">Nenhuma condição encontrada.</p>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center">
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {currentView === 'glossary'
                ? 'Glossário'
                : selectedCondition
                  ? selectedCondition.title
                  : 'Prescrição Fácil Digital'}
            </h2>
            {selectedCondition && currentView === 'home' && (
              <p className="text-sm text-gray-500 mt-1">CID: {selectedCondition.cid}</p>
            )}
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {currentView === 'glossary' ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Glossary onBack={() => setCurrentView('home')} />
            </div>
          ) : selectedCondition ? (
            <ConditionDetail condition={selectedCondition} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <BookOpenIcon />
                <h3 className="text-2xl font-semibold text-gray-700 mt-4">
                  Bem-vindo ao Guia de Condutas
                </h3>
                <p className="text-gray-500 mt-2">
                  Selecione uma condição no menu lateral para começar
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const ConditionDetail: FC<{ condition: Condition }> = ({ condition }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
            <section className="space-y-8">
                <InfoBlock title="Diagnóstico Diferencial" icon={<BalanceIcon />}>
                    <p className="text-lg">{condition.differentialDiagnosis}</p>
                </InfoBlock>

                <InfoBlock title="Conduta Inicial" icon={<WarningIcon />}>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        {condition.initialConduct.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </InfoBlock>

                {condition.nonPharmaTreatment.length > 0 && (
                     <InfoBlock title="Tratamento não Farmacológico" icon={<BookOpenIcon />}>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            {condition.nonPharmaTreatment.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </InfoBlock>
                )}

                {condition.pharmaTreatments.map((treatmentBlock, index) => (
                    <TreatmentBlockComponent key={index} block={treatmentBlock} />
                ))}

                {condition.proceduresInUnit && condition.proceduresInUnit.length > 0 && (
                    <InfoBlock title="Procedimentos na Unidade" icon={<BookOpenIcon />}>
                        <ul className="list-disc list-inside space-y-2 text-lg">
                            {condition.proceduresInUnit.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </InfoBlock>
                )}

                <InfoBlock title="Orientações ao Paciente" icon={<BookOpenIcon />}>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        {condition.patientGuidance.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </InfoBlock>

            </section>
        </div>
    );
};

const InfoBlock: FC<{ title: string; icon: ReactNode; children: ReactNode }> = ({ title, icon, children }) => {
    return (
        <div>
            <div className="flex items-center mb-4">
                <div className="text-blue-500 w-12 h-12 flex items-center justify-center shrink-0">{icon}</div>
                <h2 className="text-2xl font-bold text-gray-700 ml-3">{title}</h2>
            </div>
            <div className="ml-6 pl-6 border-l-2 border-blue-200 text-gray-700">
                {children}
            </div>
        </div>
    );
};

const TreatmentBlockComponent: FC<{ block: TreatmentBlock }> = ({ block }) => {
    return (
        <InfoBlock title={block.title} icon={<BookOpenIcon />}>
            <div className="space-y-4">
                {block.medications.map((med, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <p className="font-bold text-lg text-gray-800">
                            {med.name}
                            {med.category && <span className="ml-2 text-sm font-medium text-white bg-green-500 py-1 px-2 rounded-full align-middle">{med.category}</span>}
                        </p>
                        <p className="text-md text-gray-600 mt-1">{med.details}</p>
                    </div>
                ))}
            </div>
        </InfoBlock>
    );
};

export default App;
