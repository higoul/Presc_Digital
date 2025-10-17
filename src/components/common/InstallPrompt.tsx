import React, { FC, useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const InstallPrompt: FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Verificar se estamos no browser
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return;
    }

    // Verificar se o usuário já interagiu com o prompt antes
    try {
      const hasInteracted = localStorage.getItem('pwa-install-prompt-interaction');

      if (hasInteracted) {
        return; // Não mostrar novamente se já interagiu
      }
    } catch (error) {
      // Se localStorage não estiver disponível, não mostrar o prompt
      console.error('localStorage não disponível:', error);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevenir o prompt automático do navegador
      e.preventDefault();

      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);

      // Mostrar nosso prompt personalizado após 3 segundos
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      // Mostrar o prompt de instalação
      deferredPrompt.prompt();

      // Aguardar a escolha do usuário
      const { outcome } = await deferredPrompt.userChoice;

      // Marcar que o usuário interagiu
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('pwa-install-prompt-interaction', 'true');
      }

      // Limpar o prompt
      setDeferredPrompt(null);
      setShowPrompt(false);
    } catch (error) {
      console.error('Erro ao instalar PWA:', error);
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    try {
      // Marcar que o usuário recusou (não mostrar novamente)
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('pwa-install-prompt-interaction', 'true');
      }
      setShowPrompt(false);
    } catch (error) {
      console.error('Erro ao dispensar prompt:', error);
      setShowPrompt(false);
    }
  };

  // Não mostrar se não tiver prompt ou se já foi fechado
  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-md mx-auto p-4 border-2 border-blue-500 dark:border-blue-400">
        <div className="flex items-start gap-3">
          {/* Ícone do App */}
          <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">
            📱
          </div>

          {/* Conteúdo */}
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
              Instalar Prescrição Fácil
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              Adicione à tela inicial para acesso rápido e uso offline
            </p>

            {/* Botões */}
            <div className="flex gap-2">
              <button
                onClick={handleInstall}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Instalar
              </button>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors"
              >
                Agora não
              </button>
            </div>
          </div>

          {/* Botão fechar */}
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
