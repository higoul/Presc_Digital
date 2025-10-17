import React, { FC } from 'react';
import { Condition } from '../../types';
import { SearchIcon, BookOpenIcon, GlossaryIcon } from '../../assets/constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredConditions: Condition[];
  selectedCondition: Condition | null;
  onSelectCondition: (condition: Condition) => void;
  onSelectGlossary: () => void;
  isGlossaryActive: boolean;
}

export const Sidebar: FC<SidebarProps> = ({
  isOpen,
  onClose,
  searchQuery,
  onSearchChange,
  filteredConditions,
  selectedCondition,
  onSelectCondition,
  onSelectGlossary,
  isGlossaryActive,
}) => {
  return (
    <aside
      className={`${
        isOpen ? 'w-80' : 'w-0'
      } bg-white shadow-lg transition-all duration-300 overflow-hidden flex flex-col`}
      aria-hidden={!isOpen}
      aria-label="Menu de navegação"
    >
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center text-blue-600">
          <BookOpenIcon />
          <h1 className="text-xl font-bold ml-2">Guia de Condutas</h1>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden text-gray-500 hover:text-gray-700"
          aria-label="Fechar menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <label htmlFor="sidebar-search" className="sr-only">
            Pesquisar condição ou CID
          </label>
          <input
            id="sidebar-search"
            type="text"
            placeholder="Pesquisar condição ou CID..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4" aria-label="Navegação principal">
        <div className="mb-4">
          <button
            onClick={onSelectGlossary}
            className={`w-full text-left p-3 rounded-lg transition-colors flex items-center ${
              isGlossaryActive
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
            aria-current={isGlossaryActive ? 'page' : undefined}
          >
            <GlossaryIcon />
            <span className="ml-2">Glossário</span>
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 px-2">
            Condições
          </h3>
          {filteredConditions.length > 0 ? (
            <ul className="space-y-1" role="list">
              {filteredConditions.map((condition) => (
                <li key={condition.id}>
                  <button
                    onClick={() => onSelectCondition(condition)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCondition?.id === condition.id
                        ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-500'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    aria-current={selectedCondition?.id === condition.id ? 'page' : undefined}
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
  );
};
