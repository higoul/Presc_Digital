import { useState, useEffect, useCallback, useMemo } from 'react';
import { Condition, Specialty } from '../types';
import {
  loadAllConditions,
  loadConditionsBySpecialty,
  searchConditionsInIndex,
  loadConditionsByIds,
  preloadSpecialty,
  type ConditionIndex,
} from '../../data/conditions/index';
import { getConditionSpecialty } from '../utils/specialtyMapping';

interface UseConditionsOptions {
  /**
   * Carregar todas as condições na inicialização
   * @default false
   */
  preloadAll?: boolean;
  /**
   * Pré-carregar especialidade quando selecionada
   * @default true
   */
  preloadSpecialty?: boolean;
}

interface UseConditionsReturn {
  conditions: Condition[];
  conditionIndex: ConditionIndex[];
  isLoading: boolean;
  error: Error | null;
  search: (query: string, specialty?: Specialty | 'all') => Promise<void>;
  loadSpecialty: (specialty: Specialty) => Promise<void>;
  reload: () => Promise<void>;
}

/**
 * Hook para gerenciar carregamento dinâmico de condições
 * Otimiza performance carregando apenas condições necessárias
 */
export function useConditions(options: UseConditionsOptions = {}): UseConditionsReturn {
  const { preloadAll = false, preloadSpecialty: shouldPreloadSpecialty = true } = options;

  const [conditions, setConditions] = useState<Condition[]>([]);
  const [conditionIndex, setConditionIndex] = useState<ConditionIndex[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  /**
   * Carregar índice de condições (leve, apenas metadados)
   */
  const loadIndex = useCallback(async () => {
    try {
      const index = await searchConditionsInIndex('');
      setConditionIndex(index);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao carregar índice'));
    }
  }, []);

  /**
   * Carregar todas as condições
   */
  const loadAll = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const allConditions = await loadAllConditions();
      setConditions(allConditions);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao carregar condições'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Carregar condições por especialidade
   */
  const loadSpecialty = useCallback(async (specialty: Specialty) => {
    try {
      setIsLoading(true);
      setError(null);

      if (shouldPreloadSpecialty) {
        await preloadSpecialty(specialty);
      }

      const specialtyConditions = await loadConditionsBySpecialty(specialty);
      setConditions(specialtyConditions);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao carregar especialidade'));
    } finally {
      setIsLoading(false);
    }
  }, [shouldPreloadSpecialty]);

  /**
   * Buscar condições por query e especialidade
   */
  const search = useCallback(async (query: string, specialty: Specialty | 'all' = 'all') => {
    try {
      setIsLoading(true);
      setError(null);

      // Buscar no índice primeiro (rápido)
      const matchingIndex = await searchConditionsInIndex(query);

      // Filtrar por especialidade se necessário
      const filteredIndex =
        specialty === 'all'
          ? matchingIndex
          : matchingIndex.filter(item => item.specialty === specialty);

      // Carregar apenas as condições que correspondem à busca
      const idsToLoad = filteredIndex.map(item => item.id);
      const loadedConditions = await loadConditionsByIds(idsToLoad);

      setConditions(loadedConditions);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro ao buscar condições'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Recarregar condições
   */
  const reload = useCallback(async () => {
    await loadIndex();
    if (preloadAll) {
      await loadAll();
    }
  }, [preloadAll, loadIndex, loadAll]);

  // Inicializar: carregar índice sempre, condições se preloadAll = true
  useEffect(() => {
    loadIndex();
    if (preloadAll) {
      loadAll();
    } else {
      setIsLoading(false);
    }
  }, [preloadAll, loadIndex, loadAll]);

  return {
    conditions,
    conditionIndex,
    isLoading,
    error,
    search,
    loadSpecialty,
    reload,
  };
}

/**
 * Hook simplificado para usar com o sistema antigo (compatibilidade)
 * Carrega todas as condições de uma vez (modo não otimizado)
 */
export function useConditionsSimple(): {
  conditions: Condition[];
  isLoading: boolean;
  error: Error | null;
} {
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadAllConditions()
      .then(setConditions)
      .catch(err => setError(err instanceof Error ? err : new Error('Erro ao carregar condições')))
      .finally(() => setIsLoading(false));
  }, []);

  return { conditions, isLoading, error };
}

