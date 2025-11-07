import React, { FC } from 'react';
import { TreatmentBlock as TreatmentBlockType } from '../../types';
import { BookOpenIcon } from '../../assets/constants';
import { InfoBlock } from '../common/InfoBlock';

interface TreatmentBlockProps {
  block: TreatmentBlockType;
}

export const TreatmentBlock: FC<TreatmentBlockProps> = ({ block }) => {
  return (
    <InfoBlock title={block.title} icon={<BookOpenIcon />}>
      <div className="space-y-4 md:space-y-5">
        {block.medications.map((med, index) => (
          <div key={index} className="p-4 md:p-5 lg:p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl shadow-sm">
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <p className="font-bold text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-gray-100 leading-tight">
                {med.name}
              </p>
              {med.category && (
                <span className="text-xs md:text-sm font-semibold text-white bg-green-600 dark:bg-green-500 py-1.5 px-3 rounded-full whitespace-nowrap">
                  {med.category}
                </span>
              )}
            </div>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {med.details}
            </p>
          </div>
        ))}
      </div>
    </InfoBlock>
  );
};
