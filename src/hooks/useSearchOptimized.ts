import { useState, useEffect, useMemo, useCallback } from 'react';
import { Condition, Specialty } from '../types';
import { useConditions } from './useConditions';
import { searchConditionsInIndex, loadConditionsByIds, type ConditionIndex } from '../../data/conditions/index';

interface UseSearchOptimizedReturn {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSpecialty: Specialty | 'all';
  setSelectedSpecialty: (specialty: Specialty | 'all') => void;
  filteredConditions: Condition[];
  isLoading: boolean;
  error: Error | null;
}

/**
 * Hook otimizado de busca que usa carregamento dinâmico
 * Carrega apenas condições visíveis/filtradas
 */
export function useSearchOptimized(): UseSearchOptimizedReturn {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | 'all'>('all');
  const [filteredIndex, setFilteredIndex] = useState<ConditionIndex[]>([]);
  const [filteredConditions, setFilteredConditions] = useState<Condition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { loadSpecialty } = useConditions({ preloadAll: false, preloadSpecialty: true });

  // Buscar no índice (rápido, apenas metadados)
  useEffect(() => {
    const performSearch = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Buscar no índice
        let matchingIndex = await searchConditionsInIndex(searchQuery);

        // Filtrar por especialidade
        if (selectedSpecialty !== 'all') {
          matchingIndex = matchingIndex.filter(item => item.specialty === selectedSpecialty);
        }

        setFilteredIndex(matchingIndex);

        // Pré-carregar especialidade se selecionada
        if (selectedSpecialty !== 'all') {
          await loadSpecialty(selectedSpecialty);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao buscar condições'));
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [searchQuery, selectedSpecialty, loadSpecialty]);

  // Carregar condições completas dos IDs filtrados (lazy)
  useEffect(() => {
    const loadConditions = async () => {
      if (filteredIndex.length === 0) {
        setFilteredConditions([]);
        return;
      }

      try {
        setIsLoading(true);
        const ids = filteredIndex.map(item => item.id);
        
        // Carregar apenas as condições necessárias
        const conditions = await loadConditionsByIds(ids);
        setFilteredConditions(conditions);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao carregar condições'));
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce para evitar carregamentos excessivos
    const timeoutId = setTimeout(loadConditions, 100);
    return () => clearTimeout(timeoutId);
  }, [filteredIndex]);

  return {
    searchQuery,
    setSearchQuery,
    selectedSpecialty,
    setSelectedSpecialty,
    filteredConditions,
    isLoading,
    error,
  };
}

