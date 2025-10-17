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
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Pesquisar termo ou definição..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon />
        </div>
      </div>

      <div className="space-y-8">
        {categories.length > 0 ? (
          categories.map(category => (
            <section key={category}>
              <h2 className="text-2xl font-semibold text-blue-700 border-b-2 border-blue-200 pb-2 mb-4">{category}</h2>
              <div className="space-y-4">
                {filteredAndGroupedTerms[category].map(term => (
                  <div key={term.term} className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                    <h3 className="text-xl font-bold text-gray-900">{term.term}</h3>
                    <p className="text-lg text-gray-600 mt-1">{term.definition}</p>
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-8">Nenhum termo encontrado.</p>
        )}
      </div>
    </>
  );
};
