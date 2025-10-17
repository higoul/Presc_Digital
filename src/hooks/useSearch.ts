import { useState, useMemo } from 'react';
import { Condition, Specialty } from '../types';
import { getConditionSpecialty } from '../utils/specialtyMapping';

export const useSearch = (conditions: Condition[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | 'all'>('all');

  const filteredConditions = useMemo(() => {
    let filtered = conditions;

    // Filtro por especialidade
    if (selectedSpecialty !== 'all') {
      filtered = filtered.filter(
        (condition) => getConditionSpecialty(condition.id) === selectedSpecialty
      );
    }

    // Filtro por texto de busca
    if (searchQuery.trim()) {
      const lowercasedQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (condition) =>
          condition.title.toLowerCase().includes(lowercasedQuery) ||
          condition.cid.toLowerCase().includes(lowercasedQuery)
      );
    }

    return filtered;
  }, [searchQuery, selectedSpecialty, conditions]);

  return {
    searchQuery,
    setSearchQuery,
    selectedSpecialty,
    setSelectedSpecialty,
    filteredConditions,
  };
};
