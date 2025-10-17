import React, { useState, useMemo, FC } from 'react';
import { GLOSSARY_TERMS } from '../../../data/glossary';
import { SearchIcon } from '../../assets/constants';
import { GlossaryTerm } from '../../types';

interface GlossaryProps {
  onBack: () => void;
}

export const Glossary: FC<GlossaryProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndGroupedTerms = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase();

    const filtered = searchQuery.trim() === ''
      ? GLOSSARY_TERMS
      : GLOSSARY_TERMS.filter(item =>
          item.term.toLowerCase().includes(lowercasedQuery) ||
          item.definition.toLowerCase().includes(lowercasedQuery)
        );

    return filtered.reduce((acc, term) => {
      const { category } = term;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(term);
      return acc;
    }, {} as Record<string, GlossaryTerm[]>);

  }, [searchQuery]);

  const categories = Object.keys(filteredAndGroupedTerms).sort();

  return (
    <>
      <div className="relative mb-4 md:mb-6">
        <input
          type="text"
          placeholder="Pesquisar termo ou definição..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 md:p-4 md:pl-12 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 text-sm md:text-base"
        />
        <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
          <SearchIcon />
        </div>
      </div>

      <div className="space-y-6 md:space-y-8">
        {categories.length > 0 ? (
          categories.map(category => (
            <section key={category}>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-blue-700 dark:text-blue-400 border-b-2 border-blue-200 dark:border-blue-700 pb-2 mb-3 md:mb-4">{category}</h2>
              <div className="space-y-3 md:space-y-4">
                {filteredAndGroupedTerms[category].map(term => (
                  <div key={term.term} className="bg-gray-50 dark:bg-gray-700 p-3 md:p-4 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100">{term.term}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mt-1">{term.definition}</p>
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="text-center text-sm md:text-base text-gray-500 dark:text-gray-400 col-span-full mt-8">Nenhum termo encontrado.</p>
        )}
      </div>
    </>
  );
};
