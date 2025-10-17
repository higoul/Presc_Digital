import React, { FC, useEffect, memo } from 'react';

interface Shortcut {
  keys: string;
  description: string;
}

interface KeyboardHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

const shortcuts: Shortcut[] = [
  { keys: 'Ctrl + K', description: 'Focar no campo de busca' },
  { keys: 'Ctrl + B', description: 'Abrir/fechar menu lateral' },
  { keys: 'Ctrl + G', description: 'Abrir glossário' },
  { keys: 'Ctrl + ?', description: 'Mostrar/ocultar esta ajuda' },
  { keys: 'Esc', description: 'Fechar menu ou modal' },
  { keys: 'Tab', description: 'Navegar entre elementos' },
  { keys: 'Shift + Tab', description: 'Navegar para trás' },
  { keys: 'Enter', description: 'Selecionar item focado' },
];

export const KeyboardHelp: FC<KeyboardHelpProps> = memo(({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="keyboard-help-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-4 p-6 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="keyboard-help-title" className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Atalhos de Teclado
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
            aria-label="Fechar ajuda de teclado"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <span className="text-gray-700 dark:text-gray-300">{shortcut.description}</span>
              <kbd className="px-3 py-1 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded shadow-sm text-sm font-mono dark:text-gray-200">
                {shortcut.keys}
              </kbd>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          <p>Pressione <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">Esc</kbd> ou clique fora para fechar</p>
        </div>
      </div>
    </div>
  );
});

KeyboardHelp.displayName = 'KeyboardHelp';
