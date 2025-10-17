import React, { FC, ReactNode } from 'react';

interface InfoBlockProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const InfoBlock: FC<InfoBlockProps> = ({ title, icon, children }) => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="text-blue-500 dark:text-blue-400 w-12 h-12 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100 ml-3">{title}</h2>
      </div>
      <div className="ml-6 pl-6 border-l-2 border-blue-200 dark:border-blue-700 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};
