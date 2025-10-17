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
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="flex justify-center mb-4 text-blue-500">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-700 mt-4">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
});

EmptyState.displayName = 'EmptyState';
