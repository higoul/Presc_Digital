import React, { FC, memo } from 'react';
import { Condition } from '../../types';

interface MobileBottomNavProps {
  onToggleMenu: () => void;
  onOpenSearch: () => void;
  onOpenGlossary: () => void;
  onGoBack?: () => void;
  canGoBack: boolean;
  isMenuOpen: boolean;
  hasSelectedCondition: boolean;
}

export const MobileBottomNav: FC<MobileBottomNavProps> = memo(({
  onToggleMenu,
  onOpenSearch,
  onOpenGlossary,
  onGoBack,
  canGoBack,
  isMenuOpen,
  hasSelectedCondition,
}) => {
  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-40 safe-area-inset-bottom"
      aria-label="Navegação móvel"
    >
      <div className="grid grid-cols-4 gap-1 px-2 py-2">
        {/* Botão Menu */}
        <button
          onClick={onToggleMenu}
          className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
            isMenuOpen
              ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-pressed={isMenuOpen}
        >
          <svg 
            className="w-6 h-6 mb-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
          <span className="text-xs font-medium">Menu</span>
        </button>

        {/* Botão Buscar */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Buscar condições"
        >
          <svg 
            className="w-6 h-6 mb-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          <span className="text-xs font-medium">Buscar</span>
        </button>

        {/* Botão Glossário */}
        <button
          onClick={onOpenGlossary}
          className="flex flex-col items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Abrir glossário"
        >
          <svg 
            className="w-6 h-6 mb-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
            />
          </svg>
          <span className="text-xs font-medium">Glossário</span>
        </button>

        {/* Botão Voltar */}
        <button
          onClick={onGoBack}
          disabled={!canGoBack}
          className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
            canGoBack
              ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              : 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
          }`}
          aria-label="Voltar"
          aria-disabled={!canGoBack}
        >
          <svg 
            className="w-6 h-6 mb-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          <span className="text-xs font-medium">Voltar</span>
        </button>
      </div>
    </nav>
  );
});

MobileBottomNav.displayName = 'MobileBottomNav';

