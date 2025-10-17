import { useEffect, useRef } from 'react';

export const useFocusManagement = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  const focusElement = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return { ref, focusElement };
};

export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey as EventListener);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey as EventListener);
    };
  }, [isActive]);

  return containerRef;
};
