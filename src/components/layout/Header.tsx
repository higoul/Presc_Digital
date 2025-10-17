import React, { FC, memo } from 'react';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  title: string;
  subtitle?: string;
}

export const Header: FC<HeaderProps> = memo(({
  sidebarOpen,
  onToggleSidebar,
  title,
  subtitle,
}) => {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center">
      {!sidebarOpen && (
        <button
          onClick={onToggleSidebar}
          className="mr-4 text-gray-500 hover:text-gray-700"
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </header>
  );
});

Header.displayName = 'Header';
