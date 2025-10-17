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
              ? 'bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-500'
              : 'hover:bg-gray-50 text-gray-700'
          }`}
          aria-current={isSelected ? 'page' : undefined}
        >
          <div className="font-medium text-sm">{condition.title}</div>
          <div className="text-xs text-gray-500 mt-1">CID: {condition.cid}</div>
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
