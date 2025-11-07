import React, { FC, memo } from 'react';
import { Condition } from '../../types';

interface ConditionListItemProps {
  condition: Condition;
  isSelected: boolean;
  onSelect: (condition: Condition) => void;
}

export const ConditionListItem: FC<ConditionListItemProps> = memo(
  ({ condition, isSelected, onSelect }) => {
    return (
      <li>
        <button
          onClick={() => onSelect(condition)}
          className={`w-full text-left p-3 rounded-lg transition-colors ${
            isSelected
              ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold border-l-4 border-blue-500 dark:border-blue-400'
              : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
          aria-current={isSelected ? 'page' : undefined}
        >
          <div className="font-medium text-sm">{condition.title}</div>
        </button>
      </li>
    );
  },
  (prevProps, nextProps) => {
    // Só re-renderiza se a condição mudou ou o estado de seleção mudou
    return (
      prevProps.condition.id === nextProps.condition.id &&
      prevProps.isSelected === nextProps.isSelected
    );
  }
);

ConditionListItem.displayName = 'ConditionListItem';
