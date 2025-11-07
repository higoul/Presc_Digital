import React, { FC, memo, RefObject } from 'react';
import { Condition, Specialty } from '../../types';
import { SearchIcon, BookOpenIcon, GlossaryIcon } from '../../assets/constants';
import { ConditionListItem } from './ConditionListItem';
import { SPECIALTY_LIST } from '../../utils/specialtyMapping';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSpecialty: Specialty | 'all';
  onSpecialtyChange: (specialty: Specialty | 'all') => void;
  filteredConditions: Condition[];
  selectedCondition: Condition | null;
  onSelectCondition: (condition: Condition) => void;
  onSelectGlossary: () => void;
  isGlossaryActive: boolean;
  searchInputRef?: RefObject<HTMLInputElement>;
}

export const Sidebar: FC<SidebarProps> = ({
  isOpen,
  onClose,
  searchQuery,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  filteredConditions,
  selectedCondition,
  onSelectCondition,
  onSelectGlossary,
  isGlossaryActive,
  searchInputRef,
}) => {
  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`${
          isOpen 
            ? 'w-80 translate-x-0' 
            : 'w-0 -translate-x-full md:w-80 md:translate-x-0'
        } fixed md:relative top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 overflow-hidden flex flex-col z-40`}
        aria-hidden={!isOpen}
        aria-label="Menu de navegação"
      >
      <div className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between safe-area-inset-top">
        <div className="flex items-center text-blue-600 dark:text-blue-400 min-w-0 flex-1">
          <BookOpenIcon />
          <h1 className="text-lg md:text-xl font-bold ml-2 truncate">Guia de Condutas</h1>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors flex-shrink-0 ml-2"
          aria-label="Fechar menu lateral"
          title="Fechar menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Filtro de Especialidade */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <label htmlFor="specialty-filter" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
          Filtrar por Especialidade
        </label>
        <select
          id="specialty-filter"
          value={selectedSpecialty}
          onChange={(e) => onSpecialtyChange(e.target.value as Specialty | 'all')}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm bg-white dark:bg-gray-700 dark:text-gray-100"
        >
          <option value="all">Todas as Especialidades</option>
          {SPECIALTY_LIST.map((specialty) => (
            <option key={specialty} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>

      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <label htmlFor="sidebar-search" className="sr-only">
            Pesquisar condição ou CID
          </label>
          <input
            id="sidebar-search"
            ref={searchInputRef}
            type="text"
            placeholder="Pesquisar condição ou CID..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
            aria-describedby="keyboard-shortcut-search"
          />
          <span id="keyboard-shortcut-search" className="sr-only">
            Pressione Ctrl+K para focar neste campo
          </span>
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
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
                ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold'
                : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
            aria-current={isGlossaryActive ? 'page' : undefined}
          >
            <GlossaryIcon />
            <span className="ml-2">Glossário</span>
          </button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2 px-2">
            Condições
          </h3>
          {filteredConditions.length > 0 ? (
            <ul className="space-y-1" role="list">
              {filteredConditions.map((condition) => (
                <ConditionListItem
                  key={condition.id}
                  condition={condition}
                  isSelected={selectedCondition?.id === condition.id}
                  onSelect={onSelectCondition}
                />
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 px-2">Nenhuma condição encontrada.</p>
          )}
        </div>
      </nav>
      </aside>
    </>
  );
};
