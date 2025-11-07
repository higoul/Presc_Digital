import React, { FC, ReactNode } from 'react';

interface InfoBlockProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const InfoBlock: FC<InfoBlockProps> = ({ title, icon, children }) => {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center mb-4 md:mb-5">
        <div className="text-blue-600 dark:text-blue-400 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 ml-3 md:ml-4">
          {title}
        </h2>
      </div>
      <div className="text-gray-800 dark:text-gray-200">
        {children}
      </div>
    </div>
  );
};
