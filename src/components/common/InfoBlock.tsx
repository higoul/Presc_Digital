import React, { FC, ReactNode } from 'react';

interface InfoBlockProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const InfoBlock: FC<InfoBlockProps> = ({ title, icon, children }) => {
  return (
    <div>
      <div className="flex items-center mb-3 md:mb-4">
        <div className="text-blue-500 dark:text-blue-400 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-100 ml-2 md:ml-3">{title}</h2>
      </div>
      <div className="ml-4 pl-4 md:ml-6 md:pl-6 border-l-2 border-blue-200 dark:border-blue-700 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
};
