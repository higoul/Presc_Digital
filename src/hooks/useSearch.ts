import { useState, useMemo } from 'react';
import { Condition } from '../types';

export const useSearch = (conditions: Condition[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConditions = useMemo(() => {
    if (!searchQuery.trim()) {
      return conditions;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return conditions.filter(
      (condition) =>
        condition.title.toLowerCase().includes(lowercasedQuery) ||
        condition.cid.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery, conditions]);

  return {
    searchQuery,
    setSearchQuery,
    filteredConditions,
  };
};
