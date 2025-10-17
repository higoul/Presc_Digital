import React, { FC, ReactNode, memo } from 'react';
import { BookOpenIcon } from '../../assets/constants';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export const EmptyState: FC<EmptyStateProps> = memo(({
  icon = <BookOpenIcon />,
  title,
  description,
}) => {
  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="text-center">
        <div className="flex justify-center mb-4 text-blue-500 dark:text-blue-400">{icon}</div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mt-4">{title}</h3>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
});

EmptyState.displayName = 'EmptyState';
