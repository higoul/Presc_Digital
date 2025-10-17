import React, { FC, memo } from 'react';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  title: string;
  subtitle?: string;
  isDark: boolean;
  onToggleDarkMode: () => void;
}

export const Header: FC<HeaderProps> = memo(({
  sidebarOpen,
  onToggleSidebar,
  title,
  subtitle,
  isDark,
  onToggleDarkMode,
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex items-center justify-between transition-colors">
      <div className="flex items-center">
        {!sidebarOpen && (
          <button
            onClick={onToggleSidebar}
            className="mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
          {subtitle && <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
        </div>
      </div>

      {/* Botão Dark Mode */}
      <button
        onClick={onToggleDarkMode}
        className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
        title={isDark ? 'Modo claro' : 'Modo escuro'}
      >
        {isDark ? (
          // Ícone de Sol (modo claro)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          // Ícone de Lua (modo escuro)
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </header>
  );
});

Header.displayName = 'Header';
